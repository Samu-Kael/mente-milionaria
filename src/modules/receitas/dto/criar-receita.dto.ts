import { z } from "zod";

export const criarReceitaSchema = z.object({
  descricao: z.string().min(1, { message: "A descrição é obrigatória" }),
  // Garante que o input vire número do valor positivo
  valor: z.coerce.number().positive({ message: "O valor deve ser positivo" }),
  // Transforma a string do input da data em texto em um objeto Date válido
  data: z.coerce.date({ invalid_type_error: "Data inválida" }),
  categoriaId: z.coerce.number().positive({ message: "Selecione uma categoria válida" }),
});

export type CriarReceitaDTO = z.infer<typeof criarReceitaSchema>;