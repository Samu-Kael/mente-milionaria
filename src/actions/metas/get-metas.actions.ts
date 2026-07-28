export async function getMetasAction() {
  try {
    const response = await fetch('/api/metas', {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar metas');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na action getMetasAction:', error);
    return [];
  }
}