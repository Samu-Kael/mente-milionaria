'server-only';
'use server';

import { db } from '@/infrastructure/persistence/db';
import { metas } from '@/infrastructure/persistence/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

export async function buscarMetas(usuarioId = 'usr_1') {
  try {
    return await db.select().from(metas).where(eq(metas.usuarioId, usuarioId));
  } catch (error) {
    return [];
  }
}

export async function criarMeta(formData: FormData) {
  const titulo = formData.get('titulo') as string;
  const valorAlvo = parseFloat(formData.get('valorAlvo') as string);
  const valorAtual = parseFloat(formData.get('valorAtual') as string) || 0;
  const prazo = formData.get('prazo') as string;

  if (!titulo || isNaN(valorAlvo) || !prazo) {
    throw new Error('Preencha todos os campos obrigatórios.');
  }

  await db.insert(metas).values({
    id: `meta_${Date.now()}`,
    usuarioId: 'usr_1',
    titulo,
    valorAlvo,
    valorAtual,
    prazo,
  });

  revalidatePath('/metas');
}