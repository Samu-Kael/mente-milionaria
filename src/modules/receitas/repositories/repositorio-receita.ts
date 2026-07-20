import { Transacao } from "@/core/tipos";
import { CriarReceitaDTO } from "../dto/criar-receita.dto";

export interface IReceitaRepository {
  criar(dados: CriarReceitaDTO): Promise<void>;
  listarTodas(): Promise<Transacao[]>;
}