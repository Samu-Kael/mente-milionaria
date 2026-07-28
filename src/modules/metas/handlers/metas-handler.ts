import { MetasUseCase } from '../usecases/metas.usecase';
import { CreateMetaDTO } from '../dto/meta.dto';

export const MetasHandler = {
  async handleCriar(body: any) {
    const dto: CreateMetaDTO = {
      titulo: body.titulo,
      valorAlvo: Number(body.valorAlvo),
      prazo: body.prazo,
    };

    if (!dto.titulo || isNaN(dto.valorAlvo)) {
      throw new Error('Dados obrigatórios ausentes ou inválidos.');
    }

    return await MetasUseCase.criar(dto);
  },

  async handleExcluir(id: string | null) {
    if (!id) throw new Error('ID da meta é obrigatório.');
    return await MetasUseCase.excluir(id);
  },

  async handleBuscarTodas() {
    return await MetasUseCase.buscarTodas();
  }
};