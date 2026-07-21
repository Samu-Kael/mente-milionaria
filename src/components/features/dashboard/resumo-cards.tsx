// src/components/features/dashboard/resumo-cards.tsx

export function ResumoCards({ 
  receitas = [], 
  despesas = [], 
  metas = [] 
}: ResumoCardsProps) {
  const totalRecebido = (receitas?.reduce((acc, curr) => acc + curr.valor, 0) ?? 0) / 100;
  const totalDespesas = (despesas?.reduce((acc, curr) => acc + curr.valor, 0) ?? 0) / 100;
  const saldo = totalRecebido - totalDespesas;

  // ... resto do retorno visual do componente ...
}