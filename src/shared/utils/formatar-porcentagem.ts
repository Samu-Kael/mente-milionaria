export function formatarPorcentagem(valorAtual: number, valorAlvo: number): number {
  if (!valorAlvo || valorAlvo <= 0) return 0;

  const porcentagem = Math.round((valorAtual / valorAlvo) * 100);
  return Math.min(100, Math.max(0, porcentagem));
}