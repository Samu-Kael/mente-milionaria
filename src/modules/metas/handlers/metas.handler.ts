import { MetasUseCase } from '../usecases/metas.usecase';

export const MetasHandler = {
  async handleBuscarTodas() {
    return await MetasUseCase.buscarTodas();
  },

  async handleCriar(dados: any) {
    return await MetasUseCase.criar(dados);
  },

  async handleDeletar(id: string) {
    return await MetasUseCase.deletar(id);
  },

  async handleAdicionarSaldo(id: string, valor: number) {
    return await MetasUseCase.adicionarSaldo(id, valor);
  }
};