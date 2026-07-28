import { DespesasUseCase } from '../usecases/despesas.usecase';
import { CreateDespesaDTO } from '../dto/despesa.dto';

export const DespesasHandler = {
  async handleCriar(body: any) {
    const dto: CreateDespesaDTO = {
      descricao: body.descricao,
      valor: Number(body.valor),
      categoria: body.categoria,
      data: body.data,
    };

    if (!dto.descricao || isNaN(dto.valor)) {
      throw new Error('Dados de despesa inválidos.');
    }

    return await DespesasUseCase.criar(dto);
  },

  async handleExcluir(id: string | null) {
    if (!id) throw new Error('ID da despesa é obrigatório.');
    return await DespesasUseCase.excluir(id);
  },

  async handleBuscarTodas() {
    return await DespesasUseCase.buscarTodas();
  }
};