export async function deleteDespesaAction(id: string) {
  try {
    const response = await fetch(`/api/despesas?id=${id}`, {
      method: 'DELETE',
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Erro ao deletar despesa' };
    }

    return { success: true };
  } catch (error) {
    console.error('Erro na action deleteDespesaAction:', error);
    return { success: false, error: 'Erro de conexão ao deletar despesa' };
  }
}