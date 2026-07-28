export async function deleteMetaAction(id: string) {
  try {
    const response = await fetch(`/api/metas?id=${id}`, {
      method: 'DELETE',
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Erro ao deletar meta' };
    }

    return { success: true };
  } catch (error) {
    console.error('Erro na action deleteMetaAction:', error);
    return { success: false, error: 'Erro de conexão ao deletar meta' };
  }
}