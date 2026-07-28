export async function getDespesasAction() {
  try {
    const response = await fetch('/api/despesas', {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar despesas');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na action getDespesasAction:', error);
    return [];
  }
}