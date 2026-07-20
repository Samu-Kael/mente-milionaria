export interface CriarReceitaDTO {
  descricao: string;
  valor: number; 
  data: string;
  categoriaId: number;
}

export function validarCriarReceita(dados: any): CriarReceitaDTO {
  if (!dados.descricao || typeof dados.descricao !== "string" || dados.descricao.trim() === "") {
    throw new Error("A descrição da receita é obrigatória.");
  }
  
  const valorNum = parseFloat(dados.valor);
  if (isNaN(valorNum) || valorNum <= 0) {
    throw new Error("O valor da receita deve ser um número maior que zero.");
  }

  if (!dados.data || typeof dados.data !== "string") {
    throw new Error("A data da receita é obrigatória.");
  }

  const categoriaIdNum = parseInt(dados.categoriaId, 10);
  if (isNaN(categoriaIdNum)) {
    throw new Error("Uma categoria válida deve ser selecionada.");
  }

  return {
    descricao: dados.descricao.trim(),
    valor: Math.round(valorNum * 100),
    data: dados.data,
    categoriaId: categoriaIdNum
  };
}