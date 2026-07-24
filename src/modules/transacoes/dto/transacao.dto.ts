import { z } from 'zod';

export const transacaoCreateSchema = z.object({
  descricao: z.string().trim().min(1, 'Descrição obrigatória.'),
  valor: z.coerce.number().positive('Valor deve ser maior que zero.'),
  tipo: z.enum(['RECEITA', 'DESPESA']),
  categoria: z.string().trim().min(1, 'Categoria obrigatória.'),
  data: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/g, 'Data deve seguir o formato YYYY-MM-DD.'),
  usuarioId: z.string().optional(),
});

export type CreateTransacaoInput = z.infer<typeof transacaoCreateSchema>;
