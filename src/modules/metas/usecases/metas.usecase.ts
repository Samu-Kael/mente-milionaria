import { MetasRepository } from '../repositories/metas.repository';
import { CreateMetaDTO } from '../dto/meta.dto';

export const MetasUseCase = {
  async criar(dto: CreateMetaDTO) {
    if (dto.valorAlvo <= 0) {
      throw new Error('O valor alvo da meta deve ser maior que zero.');
    }

    const novaMeta = {
      id: crypto.randomUUID(),
      usuarioId: 'usr_1',
      titulo: dto.titulo,
      valorAlvo: dto.valorAlvo,
      valorAtual: 0,
      prazo: dto.prazo,
      criadoEm: new Date().toISOString(),
    };

    await MetasRepository.salvar(novaMeta);
    return { success: true, meta: novaMeta };
  },

  async excluir(id: string) {
    await MetasRepository.excluir(id);
    return { success: true };
  },

  async buscarTodas() {
    return await MetasRepository.listarTodas();
  }
};