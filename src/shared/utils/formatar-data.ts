export function formatarData(dataIso: string | Date): string {
  if (!dataIso) return "—";

  const data = dataIso instanceof Date ? dataIso : new Date(dataIso);

  if (Number.isNaN(data.getTime())) {
    return "—";
  }

  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}