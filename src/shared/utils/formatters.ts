export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor || 0);
}

export function formatarData(dataIso: string): string {
  if (!dataIso) return '-';
  const [ano, mes, dia] = dataIso.split('T')[0].split('-');
  return `${dia}/${mes}/${ano}`;
}

export function formatarPorcentagem(valorAtual: number, valorAlvo: number): number {
  if (!valorAlvo || valorAlvo <= 0) return 0;
  return Math.min(100, Math.round((valorAtual / valorAlvo) * 100));
}