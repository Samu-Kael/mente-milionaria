import { acaoCriarDespesa } from "@/actions/despesas/create-despesas.action";

interface FormDespesaProps {
  categorias: {
    id: number;
    nome: string;
    tipo: "receita" | "despesa";
  }[];
}

export function FormDespesa({ categorias }: FormDespesaProps) {
  const categoriasDespesa = categorias.filter((cat) => cat.tipo === "despesa");

  return (
    <form action={acaoCriarDespesa} className="bg-gray-900 p-6 rounded-lg space-y-4 border border-gray-800">
      <h2 className="text-xl font-bold text-rose-500">Nova Despesa</h2>
      
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Descrição</label>
        <input 
          type="text" 
          name="descricao" 
          placeholder="Ex: Conta de Luz, Aluguel, Ifood..." 
          required 
          className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white focus:outline-none focus:border-rose-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Categoria</label>
        <select 
          name="categoriaId" 
          required 
          className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white focus:outline-none focus:border-rose-500"
        >
          <option value="" className="text-gray-500">Selecione uma categoria</option>
          {categoriasDespesa.map((cat) => (
            <option key={cat.id} value={cat.id} className="text-white">
              {cat.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Valor Gasto (R$)</label>
          <input 
            type="number" 
            step="0.01" 
            name="valor" 
            placeholder="0,00" 
            required 
            className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white focus:outline-none focus:border-rose-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Data</label>
          <input 
            type="date" 
            name="data" 
            required 
            className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white focus:outline-none focus:border-rose-500"
          />
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 rounded transition-colors mt-2"
      >
        Registrar Despesa
      </button>
    </form>
  );
}