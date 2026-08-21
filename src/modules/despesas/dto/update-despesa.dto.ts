import type { Despesa } from "@/shared/types/domain/despesa";

export type UpdateDespesaDTO = Partial<Omit<Despesa, "id" | "criadoEm">>;