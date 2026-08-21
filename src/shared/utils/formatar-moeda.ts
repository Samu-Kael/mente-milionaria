export function formatarMoeda(valor: number): string {
  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return "R$ 0,00";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}