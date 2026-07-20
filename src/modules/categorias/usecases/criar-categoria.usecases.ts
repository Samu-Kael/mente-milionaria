import { ICategoriaRepository } from "../repositories/repositorio-categoria";
import { CriarCategoriaDTO } from "../dto/criar-categoria.dto";

export class CriarCategoriaUseCase {
  constructor(private categoriaRepository: ICategoriaRepository) {}

  async executar(dto: CriarCategoriaDTO): Promise<void> {
    const categoriaExistente = await this.categoriaRepository.buscarPorNomeETipo(
      dto.nome,
      dto.tipo
    );

    if (categoriaExistente) {
      throw new Error(`A categoria '${dto.nome}' já existe para o tipo ${dto.tipo}.`);
    }

    await this.categoriaRepository.criar(dto);
  }
}