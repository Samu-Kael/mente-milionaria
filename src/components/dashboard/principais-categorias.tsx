'use client';

interface CategoriaResumo {
  nome: string;
  total: number;
  porcentagem: number;
}

interface PrincipaisCategoriasProps {
  categorias: CategoriaResumo[];
}

export function PrincipaisCategorias({ categorias }: PrincipaisCategoriasProps) {
  if (!categorias || categorias.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-center">
        <p className="text-zinc-500 text-sm">Nenhum dado de categoria disponível.</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
      <h3 className="text-lg font-bold text-white">Gastos por Categoria</h3>

      <div className="space-y-4">
        {categorias.slice(0, 4).map((cat) => (
          <div key={cat.nome} className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-zinc-300">{cat.nome}</span>
              <span className="text-zinc-400">R$ {cat.total.toFixed(2)} ({cat.porcentagem}%)</span>
            </div>
            
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(cat.porcentagem, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}