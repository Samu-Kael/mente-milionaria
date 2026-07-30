'use client';

import { useDespesas } from '@/hooks/despesas/use-despesas';
import { useCategorias } from '@/hooks/categorias/use-categorias';
import { SelectCategoriaDinamico } from '../categorias/select-categoria-dinamico';

export function FormDespesa() {
  const { handleCreateDespesa, isSubmitting, errorMsg } = useDespesas();
  const { salvarCategoriaSeNecessario } = useCategorias();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nomeCategoriaFinal = await salvarCategoriaSeNecessario();

    const novaDespesa = {
      descricao: formData.get('descricao') as string,
      valor: Number(formData.get('valor')),
      data: formData.get('data') as string,
      categoria: nomeCategoriaFinal || (formData.get('categoria') as string),
    };

    await handleCreateDespesa(novaDespesa, form);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
      <h2 className="text-xl font-bold text-white mb-4">Nova Despesa</h2>

      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded text-sm">
          {errorMsg}
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="descricao" className="text-sm font-medium">Descrição</label>
        <input type="text" name="descricao" id="descricao" required className="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white" placeholder="Ex: Conta de Luz" />
      </div>

      <div className="space-y-1">
        <label htmlFor="valor" className="text-sm font-medium">Valor (R$)</label>
        <input type="number" step="0.01" name="valor" id="valor" required className="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white" placeholder="0.00" />
      </div>

      <div className="space-y-1">
        <label htmlFor="data" className="text-sm font-medium">Data</label>
        <input type="date" name="data" id="data" required className="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white" />
      </div>

      <SelectCategoriaDinamico />

      <button type="submit" disabled={isSubmitting} className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md transition-colors disabled:opacity-50">
        {isSubmitting ? 'Salvando...' : 'Salvar Despesa'}
      </button>
    </form>
  );
}