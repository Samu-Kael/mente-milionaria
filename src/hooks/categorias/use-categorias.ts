'use client';

import { useState } from 'react';
import { createCategoriaAction } from '@/actions/categorias/create-categoria.action';

export function useCategorias() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCreateCategoria = async (formData: FormData) => {
    setIsSubmitting(true);
    setErrorMsg(null);
    const result = await createCategoriaAction(formData);
    setIsSubmitting(false);

    if (!result.success && result.error) {
      setErrorMsg(result.error);
    }
    return result.success;
  };

  return { isSubmitting, errorMsg, handleCreateCategoria };
}