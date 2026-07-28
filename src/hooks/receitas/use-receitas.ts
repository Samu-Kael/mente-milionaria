'use client';

import { useState } from 'react';
import { createReceitasAction } from '@/actions/receitas/create-receitas.action';

export function useReceitas() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCreateReceita = async (formData: FormData) => {
    setIsSubmitting(true);
    setErrorMsg(null);
    const result = await createReceitasAction(formData);
    setIsSubmitting(false);

    if (!result.success && result.error) {
      setErrorMsg(result.error);
    }
    return result.success;
  };

  return { isSubmitting, errorMsg, handleCreateReceita };
}