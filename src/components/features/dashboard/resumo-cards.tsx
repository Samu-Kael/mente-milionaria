interface ResumoFinanceiro {
  saldoTotal: number;
  totalEntradas: number;
  totalSaidas: number;
}

export function ResumoCards({ resumo }: { resumo: ResumoFinanceiro }) {
  const formatarMoeda = (valor: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm space-y-2">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Saldo na Conta</span>
        <div
          className={`text-3xl font-bold tracking-tight ${
            (resumo?.saldoTotal ?? 0) >= 0 ? 'text-zinc-100' : 'text-rose-400'
          }`}
        >
          {formatarMoeda(resumo?.saldoTotal ?? 0)}
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm space-y-2">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Entradas</span>
        <div className="text-3xl font-bold tracking-tight text-emerald-400">
          {formatarMoeda(resumo?.totalEntradas ?? 0)}
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm space-y-2">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Saídas</span>
        <div className="text-3xl font-bold tracking-tight text-rose-400">
          {formatarMoeda(resumo?.totalSaidas ?? 0)}
        </div>
      </div>
    </section>
  );
}

export default ResumoCards;