export async function loginAction(formData: FormData) {
  try {
    const data = {
      email: formData.get('email') as string,
      senha: formData.get('senha') as string,
    };

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || 'Falha na autenticação' };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Erro na action loginAction:', error);
    return { success: false, error: 'Erro de conexão no login' };
  }
}