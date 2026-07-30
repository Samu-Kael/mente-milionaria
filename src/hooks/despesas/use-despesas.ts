'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useDespesas() {
  const router = useRouter();
  const [despesas, setDespesas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchDespesas = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/despesas');
      if (res.ok) {
        const data = await res.json();
        setDespesas(Array.isArray(data) ? data : []);
      } else {
        setDespesas([]);
      }
    } catch (error) {
      console.error("Erro ao buscar despesas:", error);
      setDespesas([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDespesas();
  }, []);

  const handleCreateDespesa = async (novaDespesa: any, form?: HTMLFormElement) => {
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/despesas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaDespesa),
      });

      if (res.ok) {
        if (form && typeof form.reset === 'function') {
          form.reset();
        }
        await fetchDespesas();
        router.refresh();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMsg(errorData.error || 'Erro ao salvar a despesa.');
      }
    } catch (error) {
      setErrorMsg('Erro de conexão com o servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteDespesa = async (id: string) => {
    // 1. Remove da tela imediatamente
    setDespesas((prev) => prev.filter((item) => item.id !== id));

    try {
      // 2. Avisa o servidor
      const res = await fetch(`/api/despesas?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh();
      } else {
        await fetchDespesas();
        alert('Não foi possível excluir a despesa no servidor.');
      }
    } catch (error) {
      console.error("Erro ao deletar:", error);
      await fetchDespesas();
    }
  };

  return {
    despesas,
    isLoading,
    isSubmitting,
    errorMsg,
    handleCreateDespesa,
    handleDeleteDespesa,
  };
}