import { CriarReceitaDTO } from "../dto/criar-receita.dto";

export interface IReceitaRepository {
  salvar(dados: CriarReceitaDTO): Promise<void>;
}

export class CriarReceitaUseCase {
  constructor(private readonly repositorio: IReceitaRepository) {}

  async executar(dados: CriarReceitaDTO) {

    await this.repositorio.salvar(dados);

    return {
      sucesso: true,
      mensagem: "Receita criada com sucesso!",
      receita: dados
    };
  }
}