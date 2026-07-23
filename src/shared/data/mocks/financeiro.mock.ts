import { Transacao, ContaCorrente } from '../../types/domain/financeiro';

// Remova "className" e deixe apenas "const mockTransacoes"
export const mockTransacoes: Transacao[] = [
  {
    id: '1',
    descricao: 'Salário Mensal',
    valor: 5000,
    tipo: 'RECEITA',
    categoria: 'Renda',
    data: '2026-07-01',
  },
  {
    id: '2',
    descricao: 'Supermercado',
    valor: 450,
    tipo: 'DESPESA',
    categoria: 'Alimentação',
    data: '2026-07-05',
  },
  {
    id: '3',
    descricao: 'Conta de Luz',
    valor: 180,
    tipo: 'DESPESA',
    categoria: 'Moradia',
    data: '2026-07-10',
  },
];

export const mockContas: ContaCorrente[] = [
  { id: '1', banco: 'Nubank', saldo: 3200 },
  { id: '2', banco: 'Banco Inter', saldo: 1170 },
];