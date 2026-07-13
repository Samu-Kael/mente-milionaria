import { z } from "zod";

export const criarReceitaSchema = z.object({
  descricao: z.string().min(1, { message: "A descrição é obrigatória" }),
  valor: z.number().positive({ message: "O valor deve ser positivo" }),
  data: z.date(),
  categoriaId: z.number().positive(),
});

export type CriarReceitaDTO = z.infer<typeof criarReceitaSchema>;