import { IMetaRepository } from "../repositories/repositorio-meta";
import { CriarMetaDTO } from "../dto/criar-meta.dto";

export class CriarMetaUseCase {
  constructor(private metaRepository: IMetaRepository) {}

  async executar(dto: CriarMetaDTO): Promise<void> {
    await this.metaRepository.criar(dto);
  }
}