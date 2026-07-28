export async function getReceitasAction() {
  try {
    const response = await fetch('/api/receitas', {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar receitas');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na action getReceitasAction:', error);
    return [];
  }
}