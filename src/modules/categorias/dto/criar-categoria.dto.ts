export interface CriarCategoriaDTO {
  nome: string;
  tipo: "receita" | "despesa";
}

export function validarCriarCategoria(dados: any): CriarCategoriaDTO {
  if (!dados.nome || typeof dados.nome !== "string" || dados.nome.trim() === "") {
    throw new Error("O nome da categoria é obrigatório e deve ser um texto válido.");
  }
  if (dados.tipo !== "receita" && dados.tipo !== "despesa") {
    throw new Error("O tipo da categoria deve ser 'receita' ou 'despesa'.");
  }

  return {
    nome: dados.nome.trim(),
    tipo: dados.tipo
  };
}