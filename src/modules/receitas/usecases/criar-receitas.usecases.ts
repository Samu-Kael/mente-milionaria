import { IReceitaRepository } from "../repositories/repositorio-receita";
import { CriarReceitaDTO } from "../dto/criar-receita.dto";

export class CriarReceitaUseCase {
  constructor(private receitaRepository: IReceitaRepository) {}

  async executar(dto: CriarReceitaDTO): Promise<void> {
   
    await this.receitaRepository.criar(dto);
  }
}