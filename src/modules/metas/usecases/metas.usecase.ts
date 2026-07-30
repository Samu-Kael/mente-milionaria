import { MetasRepository } from '../repositories/metas.repository';

export const MetasUseCase = {
  async buscarTodas() {
    return await MetasRepository.buscarTodas();
  },

  async criar(dados: any) {
    const valor = Number(dados.valorObjetivo || dados.valorAlvo || dados.valor);
    if (!dados.titulo || isNaN(valor) || valor <= 0) {
      throw new Error('Título e valor objetivo válidos são obrigatórios.');
    }
    return await MetasRepository.criar({
      ...dados,
      valorObjetivo: valor
    });
  },

  async deletar(id: string) {
    if (!id) throw new Error('ID é obrigatório para exclusão.');
    return await MetasRepository.deletar(id);
  },

  async adicionarSaldo(id: string, valor: number) {
    if (!id || !valor || valor <= 0) {
      throw new Error('É necessário informar um ID e um valor maior que zero.');
    }
    return await MetasRepository.adicionarSaldo(id, valor);
  }
};