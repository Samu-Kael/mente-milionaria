import { ReceitasUseCase } from '../usecases/receita.usecases';

export const ReceitasHandler = {
  async handleBuscarTodas() {
    return await ReceitasUseCase.buscarTodas();
  },

  async handleCriar(dados: any) {
    return await ReceitasUseCase.criar(dados);
  },

  async handleDeletar(id: string) {
    return await ReceitasUseCase.deletar(id);
  }
};