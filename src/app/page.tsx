import { acaoCriarReceita } from "@/actions/receitas/create-receitas.action";
import { db } from "@/infrastructure/database/client";
import { receitas } from "@/infrastructure/database/schemas/schemas";
import { garantirCategoriasIniciais } from "@/infrastructure/persistence/repositories/repositorio-categoria-drizzle";

export default async function HomePage() {
  // 1. Executa o seed automático para garantir as categorias no banco antes de tudo
  await garantirCategoriasIniciais();

  // 2. Busca todas as receitas cadastradas diretamente do banco de dados
  const listaReceitas = await db.select().from(receitas);

  // 3. Calcula o total somando os valores (dividido por 100, pois salvamos em centavos)
  const totalRecebido = listaReceitas.reduce((acumulador, item) => acumulador + item.valor, 0) / 100;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-start p-6 font-sans">
      <div className="w-full max-w-4xl mt-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-emerald-400 tracking-tight">
            Mente Milionária
          </h1>
          <p className="text-gray-400 text-sm mt-1">Gerenciador de Finanças Pessoais</p>
        </div>

        {/* Layout em Grid: Formulário na Esquerda, Resumos na Direita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* COLUNA 1 & 2: Formulário de Cadastro */}
          <div className="md:col-span-2 bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
            <h2 className="text-xl font-bold text-gray-200 mb-4">Nova Receita</h2>
            
            {/* O formulário se conecta diretamente com a nossa Action */}
            <form action={acaoCriarReceita} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Descrição</label>
                <input 
                  type="text" 
                  name="descricao" 
                  required
                  placeholder="Ex: Salário, Freelance, Venda..." 
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Valor (R$)</label>
                  <input 
                    type="number" 
                    name="valor" 
                    step="0.01"
                    required
                    placeholder="0,00" 
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Data</label>
                  <input 
                    type="date" 
                    name="data" 
                    required
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">ID da Categoria</label>
                <input 
                  type="number" 
                  name="categoriaId" 
                  required
                  placeholder="Ex: 1 (Salário), 2 (Investimentos)..." 
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold p-3 rounded-lg transition-colors mt-2"
              >
                Salvar Receita no Banco
              </button>
            </form>
          </div>

          {/* COLUNA 3: Cards de Resumo */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 shadow-md">
              <h3 className="text-gray-500 text-xs font-semibold uppercase">Total Recebido</h3>
              {/* Exibe o valor total dinamicamente formatado em formato de moeda brasileira */}
              <p className="text-2xl font-bold text-emerald-400 mt-1">
                {totalRecebido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </p>
            </div>
            
            <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 shadow-md">
              <h3 className="text-gray-500 text-xs font-semibold uppercase">Total Despesas</h3>
              <p className="text-2xl font-bold text-rose-500 mt-1">R$ 0,00</p>
            </div>

            <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 shadow-md">
              <h3 className="text-gray-500 text-xs font-semibold uppercase">Status do SQLite</h3>
              <p className="text-sm font-medium text-sky-400 mt-1">● Conectado e Operando</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}