export interface CriarDespesaDTO {
  descricao: string;
  valor: number; // armazena em centavos
  data: string;
  categoriaId: number;
}

export function validarCriarDespesa(dados: any): CriarDespesaDTO {
  if (!dados.descricao || typeof dados.descricao !== "string" || dados.descricao.trim() === "") {
    throw new Error("A descrição da despesa é obrigatória.");
  }
  
  const valorNum = parseFloat(dados.valor);
  if (isNaN(valorNum) || valorNum <= 0) {
    throw new Error("O valor da despesa deve ser um número maior que zero.");
  }

  if (!dados.data || typeof dados.data !== "string") {
    throw new Error("A data da despesa é obrigatória.");
  }

  const categoriaIdNum = parseInt(dados.categoriaId, 10);
  if (isNaN(categoriaIdNum)) {
    throw new Error("Uma categoria válida deve ser selecionada.");
  }

  return {
    descricao: dados.descricao.trim(),
//convertendo o valor para centavos (inteiro) para evitar problemas de precisão com números de ponto flutuante
    valor: Math.round(valorNum * 100),
    data: dados.data,
    categoriaId: categoriaIdNum
  };
}