export async function deleteReceitaAction(id: string) {
  try {
    const response = await fetch(`/api/receitas?id=${id}`, {
      method: 'DELETE',
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Erro ao deletar receita' };
    }

    return { success: true };
  } catch (error) {
    console.error('Erro na action deleteReceitaAction:', error);
    return { success: false, error: 'Erro de conexão ao deletar receita' };
  }
}