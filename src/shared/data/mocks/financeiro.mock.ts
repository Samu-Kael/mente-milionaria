import { TransacaoMockada, CardResumoFinanceiro, GraficoEvolucaoMensal } from "../../types/domain/financeiro";

// Dados fictícios de cards de topo (Cards de Resumo)
export const mocksCardsDashboard: CardResumoFinanceiro[] = [
  {
    titulo: "Saldo Geral",
    valor: 542050, // R$ 5.420,50
    tipo: "positivo",
    porcentagemAlteracao: 12.5
  },
  {
    titulo: "Entradas do Mês",
    valor: 830000, // R$ 8.300,00
    tipo: "neutro",
    porcentagemAlteracao: 8.2
  },
  {
    titulo: "Saídas do Mês",
    valor: 287950, // R$ 2.879,50
    tipo: "negativo",
    porcentagemAlteracao: -3.1
  }
];

// Dados fictícios
export const mocksGraficoMensal: GraficoEvolucaoMensal[] = [
  { mes: "Jan", receitas: 500000, despesas: 320000 },
  { mes: "Fev", receitas: 620000, despesas: 290000 },
  { mes: "Mar", receitas: 580000, despesas: 410000 },
  { mes: "Abr", receitas: 710000, despesas: 350000 },
  { mes: "Mai", receitas: 830000, despesas: 287950 }
];

// Listagem fictícia de transações recentes para a tabela principal
export const mocksUltimasTransacoes: TransacaoMockada[] = [
  {
    id: "mock-1",
    descricao: "Salário Mensal TechCorp",
    valor: 750000, // R$ 7.500,00
    tipo: "receita",
    data: "2026-07-05",
    categoria: "Salário"
  },
  {
    id: "mock-2",
    descricao: "Supermercado Pão de Açúcar",
    valor: 45020, // R$ 450,20
    tipo: "despesa",
    data: "2026-07-12",
    categoria: "Alimentação"
  },
  {
    id: "mock-3",
    descricao: "Projeto Freelance Website",
    valor: 80000, // R$ 800,00
    tipo: "receita",
    data: "2026-07-18",
    categoria: "Freelance/Extras"
  },
  {
    id: "mock-4",
    descricao: "Aluguel Apartamento",
    valor: 180000, // R$ 1.800,00
    tipo: "despesa",
    data: "2026-07-10",
    categoria: "Moradia"
  }
];