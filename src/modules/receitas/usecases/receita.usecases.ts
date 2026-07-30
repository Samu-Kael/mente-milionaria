import { ReceitasRepository } from '../repositories/receitas.repository';

export const ReceitasUseCase = {
  async buscarTodas() {
    return await ReceitasRepository.buscarTodas();
  },

  async criar(dados: any) {
    if (!dados.descricao || !dados.valor) {
      throw new Error('Descrição e valor são obrigatórios.');
    }
    return await ReceitasRepository.criar(dados);
  },

  async deletar(id: string) {
    if (!id) throw new Error('ID é obrigatório para exclusão.');
    return await ReceitasRepository.deletar(id);
  }
};