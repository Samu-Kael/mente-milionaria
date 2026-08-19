import { CategoriasRepository } from '../repositories/categorias.repository';
import { CreateCategoriaDTO } from '../dto/categoria.dto';
import { Categoria } from '@/shared/types';

export const CategoriasUseCase = {
  async buscarTodas(usuarioId: string = 'usr_1') {
    const personalizadas = await CategoriasRepository.listarPorUsuario(usuarioId);
    
    return [
      ...Categoria,
      ...personalizadas.map((cat: any) => ({ ...cat, isPadrao: false })),
    ];
  },

  async criar(dto: CreateCategoriaDTO) {
    const nomeFormatado = dto.nome?.trim();

    if (!nomeFormatado) {
      throw new Error('O nome da nova categoria é obrigatório.');
    }

    if (nomeFormatado.toLowerCase() === 'outra') {
      throw new Error('Digite um nome válido para sua nova categoria.');
    }

    const novaCategoria = {
      id: crypto.randomUUID(),
      usuarioId: 'usr_1',
      nome: nomeFormatado,
      cor: dto.cor || '#3B82F6',
      criadoEm: new Date().toISOString(),
    };

    await CategoriasRepository.salvar(novaCategoria);
    return { success: true, categoria: novaCategoria };
  }
};