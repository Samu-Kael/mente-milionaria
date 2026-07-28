import { DespesasRepository } from '../repositories/despesas.repository';
import { CreateDespesaDTO } from '../dto/despesa.dto';

export const DespesasUseCase = {
  async criar(dto: CreateDespesaDTO) {
    if (dto.valor <= 0) {
      throw new Error('O valor da despesa deve ser maior que zero.');
    }

    const novaDespesa = {
      id: crypto.randomUUID(),
      usuarioId: 'usr_1',
      descricao: dto.descricao,
      valor: dto.valor,
      categoria: dto.categoria,
      data: dto.data,
      criadoEm: new Date().toISOString(),
    };

    await DespesasRepository.salvar(novaDespesa);
    return { success: true, despesa: novaDespesa };
  },

  async excluir(id: string) {
    await DespesasRepository.excluir(id);
    return { success: true };
  },

  async buscarTodas() {
    return await DespesasRepository.listarTodas();
  }
};