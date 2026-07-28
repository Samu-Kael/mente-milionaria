import { Card } from '@/components/ui/card'; // Ajuste conforme seus componentes de UI
import { formatarMoeda } from '@/shared/utils/formatters';

// 1. Definimos o que o componente precisa receber (Props)
interface ResumoCardsProps {
  saldoTotal: number;
  receitasMes: number;
  despesasMes: number;
}

// 2. O componente apenas exibe os dados, sem regras de negócio!
export function ResumoCards({ saldoTotal, receitasMes, despesasMes }: ResumoCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Saldo Atual" value={formatarMoeda(saldoTotal)} />
      <Card title="Receitas (Mês)" value={formatarMoeda(receitasMes)} className="text-emerald-500" />
      <Card title="Despesas (Mês)" value={formatarMoeda(despesasMes)} className="text-red-500" />
    </div>
  );
}