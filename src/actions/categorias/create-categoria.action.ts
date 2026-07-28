export async function createCategoriaAction(formData: FormData) {
  try {
    const data = {
      nome: formData.get('nome') as string,
      cor: formData.get('cor') as string,
    };

    const response = await fetch('/api/categorias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Erro ao criar categoria' };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Erro na action createCategoriaAction:', error);
    return { success: false, error: 'Erro de conexão ao criar categoria' };
  }
}