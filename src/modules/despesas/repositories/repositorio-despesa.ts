import { Transacao } from "@/core/tipos";
import { CriarDespesaDTO } from "../dto/criar-despesa.dto";

export interface IDespesaRepository {
  criar(dados: CriarDespesaDTO): Promise<void>;
  listarTodas(): Promise<Transacao[]>;
}