export async function createMetaAction(formData: FormData) {
  try {
    const data = {
      titulo: formData.get('titulo') as string,
      valorAlvo: Number(formData.get('valorAlvo')),
      prazo: formData.get('prazo') as string,
    };

    const response = await fetch('/api/metas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Erro ao criar meta' };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Erro na action createMetaAction:', error);
    return { success: false, error: 'Erro de conexão ao criar meta' };
  }
}