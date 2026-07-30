import { DespesasUseCase } from '../usecases/despesas.usecase';

export const DespesasHandler = {
  async handleBuscarTodas() {
    return await DespesasUseCase.buscarTodas();
  },

  async handleCriar(dados: any) {
    return await DespesasUseCase.criar(dados);
  },

  async handleDeletar(id: string) {
    return await DespesasUseCase.deletar(id);
  }
};