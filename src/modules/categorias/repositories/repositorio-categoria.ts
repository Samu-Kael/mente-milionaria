import { Categoria } from "@/core/tipos";
import { CriarCategoriaDTO } from "../dto/criar-categoria.dto";

export interface ICategoriaRepository {
  criar(dados: CriarCategoriaDTO): Promise<void>;
  buscarPorNomeETipo(nome: string, tipo: "receita" | "despesa"): Promise<Categoria | null>;
  listarTodas(): Promise<Categoria[]>;
}