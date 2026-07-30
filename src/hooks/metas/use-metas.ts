'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useMetas() {
  const router = useRouter();
  const [metas, setMetas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchMetas = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/metas');
      if (res.ok) {
        const data = await res.json();
        setMetas(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Erro ao buscar metas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMetas();
  }, []);

  const handleCreateMeta = async (novaMeta: any, form?: HTMLFormElement) => {
    setIsSubmitting(true);
    setErrorMsg(null);

    const payload = {
      titulo: novaMeta.titulo,
      valorObjetivo: Number(novaMeta.valorObjetivo || novaMeta.valorAlvo || novaMeta.valor),
      prazo: novaMeta.prazo,
    };

    try {
      const res = await fetch('/api/metas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        if (form && typeof form.reset === 'function') {
          form.reset();
        }
        await fetchMetas();
        router.refresh();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMsg(errorData.error || 'Erro ao criar meta.');
      }
    } catch (error) {
      setErrorMsg('Erro de conexão com o servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteMeta = async (id: string) => {
    setMetas((prev) => prev.filter((item) => item.id !== id));
    try {
      const res = await fetch(`/api/metas?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh();
      } else {
        await fetchMetas();
      }
    } catch (error) {
      await fetchMetas();
    }
  };

  const handleAddSaldo = async (id: string, valor: number) => {
    setMetas((prev) => 
      prev.map(meta => 
        meta.id === id 
          ? { ...meta, acumulado: (Number(meta.acumulado) || 0) + valor } 
          : meta
      )
    );

    try {
      const res = await fetch('/api/metas', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, valor }),
      });

      if (res.ok) {
        router.refresh();
      } else {
        await fetchMetas();
        alert('Erro ao adicionar saldo no servidor.');
      }
    } catch (error) {
      await fetchMetas();
    }
  };

  return {
    metas,
    isLoading,
    isSubmitting,
    errorMsg,
    handleCreateMeta,
    handleDeleteMeta,
    handleAddSaldo,
  };
}