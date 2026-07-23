//transforma a moeda em real
export function formatarMoeda(valor: number, semCentavos = false): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: semCentavos ? 0 : 2,
    minimumFractionDigits: semCentavos ? 0 : 2,
  }).format(valor);
}