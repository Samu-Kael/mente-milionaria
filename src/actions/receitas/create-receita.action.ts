export async function createReceitaAction(formData: FormData) {
  try {
    const data = {
      descricao: formData.get('descricao') as string,
      valor: Number(formData.get('valor')),
      categoria: formData.get('categoria') as string,
      data: formData.get('data') as string,
    };

    const response = await fetch('/api/receitas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Erro ao criar receita' };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Erro na action createReceitaAction:', error);
    return { success: false, error: 'Erro de conexão ao criar receita' };
  }
}