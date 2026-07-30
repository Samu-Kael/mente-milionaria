'use client';

import { useReceitas } from '@/hooks/receitas/use-receitas';
import { useCategorias } from '@/hooks/categorias/use-categorias';
import { SelectCategoriaDinamico } from '../categorias/select-categoria-dinamico';

export function FormReceita() {
  const { handleCreateReceita, isSubmitting, errorMsg } = useReceitas();
  const { salvarCategoriaSeNecessario } = useCategorias();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. SALVAMOS A REFERÊNCIA IMEDIATAMENTE (Evita o erro de null)
    const form = e.currentTarget;
    const formData = new FormData(form);

    // 2. Resolvemos a categoria personalizada
    const nomeCategoriaFinal = await salvarCategoriaSeNecessario();

    // 3. Montamos o objeto de dados limpo
    const novaReceita = {
      descricao: formData.get('descricao') as string,
      valor: Number(formData.get('valor')),
      data: formData.get('data') as string,
      categoria: nomeCategoriaFinal || (formData.get('categoria') as string),
    };

    // 4. Passamos os dados diretamente para o Hook
    await handleCreateReceita(novaReceita, form);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
      <h2 className="text-xl font-bold text-emerald-400 mb-4">Nova Receita</h2>

      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded text-sm">
          {errorMsg}
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="descricao" className="text-sm font-medium text-zinc-300">Descrição</label>
        <input type="text" name="descricao" id="descricao" required className="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white focus:ring-2 focus:ring-emerald-500" placeholder="Ex: Salário Mensal, Freelance" />
      </div>

      <div className="space-y-1">
        <label htmlFor="valor" className="text-sm font-medium text-zinc-300">Valor (R$)</label>
        <input type="number" step="0.01" name="valor" id="valor" required className="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white focus:ring-2 focus:ring-emerald-500" placeholder="0.00" />
      </div>

      <div className="space-y-1">
        <label htmlFor="data" className="text-sm font-medium text-zinc-300">Data de Recebimento</label>
        <input type="date" name="data" id="data" required className="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white focus:ring-2 focus:ring-emerald-500" />
      </div>

      <SelectCategoriaDinamico />

      <button type="submit" disabled={isSubmitting} className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md transition-colors disabled:opacity-50">
        {isSubmitting ? 'Cadastrando...' : 'Cadastrar Receita'}
      </button>
    </form>
  );
}