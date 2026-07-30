'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useReceitas() {
  const router = useRouter();
  const [receitas, setReceitas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchReceitas = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/receitas');
      if (res.ok) {
        const data = await res.json();
        setReceitas(Array.isArray(data) ? data : []);
      } else {
        setReceitas([]);
      }
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
      setReceitas([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReceitas();
  }, []);

  const handleCreateReceita = async (novaReceita: any, form?: HTMLFormElement) => {
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/receitas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaReceita),
      });

      if (res.ok) {
        if (form && typeof form.reset === 'function') {
          form.reset();
        }
        await fetchReceitas();
        router.refresh();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMsg(errorData.error || 'Erro ao salvar a receita.');
      }
    } catch (error) {
      setErrorMsg('Erro de conexão com o servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteReceita = async (id: string) => {
    // 1. Remove da tela imediatamente
    setReceitas((prev) => prev.filter((item) => item.id !== id));

    try {
      // 2. Avisa o servidor
      const res = await fetch(`/api/receitas?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh();
      } else {
        await fetchReceitas();
        alert('Não foi possível excluir a receita no servidor.');
      }
    } catch (error) {
      console.error("Erro ao deletar:", error);
      await fetchReceitas();
    }
  };

  // Garante que o retorno é SEMPRE um objeto válido
  return {
    receitas,
    isLoading,
    isSubmitting,
    errorMsg,
    handleCreateReceita,
    handleDeleteReceita,
  };
}