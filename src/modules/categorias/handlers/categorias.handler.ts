import { CategoriasUseCase } from '../usecases/categorias.usecase';
import { CreateCategoriaDTO } from '../dto/categoria.dto';

export const CategoriasHandler = {
  async handleBuscarTodas() {
    return await CategoriasUseCase.buscarTodas('usr_1');
  },

  async handleCriar(body: any) {
    const dto: CreateCategoriaDTO = {
      nome: body.nome,
      cor: body.cor,
    };

    return await CategoriasUseCase.criar(dto);
  }
};