import { IDespesaRepository } from "../repositories/repositorio-despesa";
import { CriarDespesaDTO } from "../dto/criar-despesa.dto";

export class CriarDespesaUseCase {
  constructor(private despesaRepository: IDespesaRepository) {}

  async executar(dto: CriarDespesaDTO): Promise<void> {
    
    await this.despesaRepository.criar(dto);
  }
}