export interface CriarMetaDTO {
  objetivo: string;
  valorAlvo: number;  
  valorAtual: number; 
  prazo: Date;
}

export function validarCriarMeta(dados: any): CriarMetaDTO {
  if (!dados.objetivo || typeof dados.objetivo !== "string" || dados.objetivo.trim() === "") {
    throw new Error("O objetivo da meta é obrigatório.");
  }

  const valorAlvoNum = parseFloat(dados.valorAlvo);
  if (isNaN(valorAlvoNum) || valorAlvoNum <= 0) {
    throw new Error("O valor alvo deve ser um número maior que zero.");
  }

  const valorAtualNum = dados.valorAtual ? parseFloat(dados.valorAtual) : 0;
  if (isNaN(valorAtualNum) || valorAtualNum < 0) {
    throw new Error("O valor atual não pode ser negativo.");
  }

  if (valorAtualNum > valorAlvoNum) {
    throw new Error("O valor atual não pode ser maior do que o valor alvo da meta.");
  }

  if (!dados.prazo) {
    throw new Error("O prazo para alcançar a meta é obrigatório.");
  }

  const dataPrazo = new Date(dados.prazo);
  if (isNaN(dataPrazo.getTime())) {
    throw new Error("A data do prazo informada é inválida.");
  }

  if (dataPrazo <= new Date()) {
    throw new Error("O prazo da meta deve ser uma data futura.");
  }

  return {
    objetivo: dados.objetivo.trim(),
    valorAlvo: Math.round(valorAlvoNum * 100), 
    valorAtual: Math.round(valorAtualNum * 100),
    prazo: dataPrazo
  };
}