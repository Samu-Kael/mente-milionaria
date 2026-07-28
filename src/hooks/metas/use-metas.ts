'use client';

import { useState } from 'react';
import { createMetaAction } from '@/actions/metas/create-meta.action';
import { deleteMetaAction } from '@/actions/metas/delete-meta.action';

export function useMetas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const openModal = () => {
    setErrorMsg(null);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleCreateMeta = async (formData: FormData) => {
    setIsSubmitting(true);
    setErrorMsg(null);

    const result = await createMetaAction(formData);

    setIsSubmitting(false);

    if (result.success) {
      closeModal();
    } else if (result.error) {
      setErrorMsg(result.error);
    }
  };

  const handleDeleteMeta = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta meta?')) return;

    setIsSubmitting(true);
    const result = await deleteMetaAction(id);
    setIsSubmitting(false);

    if (!result.success && result.error) {
      alert(result.error);
    }
  };

  return {
    isModalOpen,
    isSubmitting,
    errorMsg,
    openModal,
    closeModal,
    handleCreateMeta,
    handleDeleteMeta,
  };
}