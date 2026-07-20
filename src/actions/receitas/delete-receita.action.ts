'use server'

import { db } from "@/infrastructure/database/client";
import { receitas } from "@/infrastructure/database/schemas/schemas";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function acaoDeletarReceita(id: number) {
  await db.delete(receitas).where(eq(receitas.id, id));
  revalidatePath("/");
}