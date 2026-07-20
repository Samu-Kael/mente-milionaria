import { acaoCriarReceita } from "@/actions/receitas/create-receitas.action";

interface FormReceitaProps {
  categorias: {
    id: number;
    nome: string;
    tipo: "receita" | "despesa";
  }[];
}

export function FormReceita({ categorias }: FormReceitaProps) {
  const categoriasReceita = categorias.filter((cat) => cat.tipo === "receita");

  return (
    <form action={acaoCriarReceita} className="bg-gray-900 p-6 rounded-lg space-y-4 border border-gray-800">
      <h2 className="text-xl font-bold text-emerald-500">Nova Receita</h2>
      
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Descrição</label>
        <input 
          type="text" 
          name="descricao" 
          placeholder="Ex: Salário..." 
          required 
          className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Categoria</label>
        <select 
          name="categoriaId" 
          required 
          className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white focus:outline-none focus:border-emerald-500"
        >
          <option value="" className="text-gray-500">Selecione uma categoria</option>
          {categoriasReceita.map((cat) => (
            <option key={cat.id} value={cat.id} className="text-white">
              {cat.nome}
            </option>
          ))}
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold py-2 rounded transition-colors mt-2"
      >
        Salvar Receita
      </button>
    </form>
  );
}