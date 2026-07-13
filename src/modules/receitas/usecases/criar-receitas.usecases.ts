import { CriarReceitaDTO } from "../dto/criar-receita.dto";

// Criamos um "contrato" (Interface) para garantir que qualquer repositório
// tenha obrigatoriamente a função de "salvar". Isso é a base da Clean Architecture.
export interface IReceitaRepository {
  salvar(dados: CriarReceitaDTO): Promise<void>;
}

export class CriarReceitaUseCase {
  // Injeção de dependência: O UseCase recebe o repositório pronto para uso
  constructor(private readonly repositorio: IReceitaRepository) {}

  async executar(dados: CriarReceitaDTO) {
    // Aqui você pode colocar regras de negócio no futuro!
    // Exemplo: if (dados.valor > 1000000) throw new Error("Valor suspeito");

    // Mandamos o repositório fazer o trabalho sujo de salvar no banco de dados
    await this.repositorio.salvar(dados);

    return {
      sucesso: true,
      mensagem: "Receita criada com sucesso!",
      receita: dados
    };
  }
}