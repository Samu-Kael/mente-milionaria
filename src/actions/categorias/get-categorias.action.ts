export async function getCategoriasUnificadasAction() {
  try {
    const response = await fetch('/api/categorias', {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar categorias');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na action getCategoriasUnificadasAction:', error);
    return [];
  }
}