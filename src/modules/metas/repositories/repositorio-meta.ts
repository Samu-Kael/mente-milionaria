import { MetaFinanceira } from "@/core/tipos";
import { CriarMetaDTO } from "../dto/criar-meta.dto";

export interface IMetaRepository {
  criar(dados: CriarMetaDTO): Promise<void>;
  listarTodas(): Promise<MetaFinanceira[]>;
}