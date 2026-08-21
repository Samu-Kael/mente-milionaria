import type { Receita } from "@/shared/types/domain/receita";

export type UpdateReceitaDTO = Partial<Omit<Receita, "id" | "criadoEm">>;