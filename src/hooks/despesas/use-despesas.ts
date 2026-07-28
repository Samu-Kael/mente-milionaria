'use client';

import { useState } from 'react';
import { createDespesaAction } from '@/actions/despesas/create-despesas.action';

export function useDespesas() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCreateDespesa = async (formData: FormData) => {
    setIsSubmitting(true);
    setErrorMsg(null);
    const result = await createDespesaAction(formData);
    setIsSubmitting(false);

    if (!result.success && result.error) {
      setErrorMsg(result.error);
    }
    return result.success;
  };

  return { isSubmitting, errorMsg, handleCreateDespesa };
}