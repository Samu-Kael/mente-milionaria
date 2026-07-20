import { Card } from "@/components/ui/card";

interface ResumoCardsProps {
  receitas: {
    id: number;
    descricao: string;
    valor: number;
    data: string;
  }[];
  despesas: {
    id: number;
    descricao: string;
    valor: number;
    data: string;
  }[];
  metas: {
    id: number;
    objetivo: string;
    valorAlvo: number;
    valorAtual: number;
    prazo: Date;
  }[];
}

export function ResumoCards({ receitas, despesas, metas }: ResumoCardsProps) {
  const totalRecebido = receitas.reduce((acc, curr) => acc + curr.valor, 0) / 100;
  const totalDespesas = despesas.reduce((acc, curr) => acc + curr.valor, 0) / 100;
  const saldo = totalRecebido - totalDespesas;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card titulo="Total Recebido" corDestaque="emerald">
        <p className="text-2xl font-bold text-emerald-500">
          R$ {totalRecebido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </Card>

      <Card titulo="Total Despesas" corDestaque="rose">
        <p className="text-2xl font-bold text-rose-500">
          R$ {totalDespesas.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </Card>

      <Card titulo="Saldo Atual" corDestaque={saldo >= 0 ? "emerald" : "rose"}>
        <p className={`text-2xl font-bold ${saldo >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
          R$ {saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </Card>
    </div>
  );
}