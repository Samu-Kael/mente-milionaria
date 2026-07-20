import { z } from "zod";

export const criarReceitaSchema = z.object({
  descricao: z.string().min(1, { message: "A descrição é obrigatória" }),
  valor: z.coerce.number().positive({ message: "O valor deve ser positivo" }),
  data: z.coerce.date({ invalid_type_error: "Data inválida" }),
  categoriaId: z.coerce.number().positive({ message: "Selecione uma categoria válida" }),
});

export type CriarReceitaDTO = z.infer<typeof criarReceitaSchema>;