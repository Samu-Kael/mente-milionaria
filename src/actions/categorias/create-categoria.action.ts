'use server'

import { db } from "@/infrastructure/database/client";
import { categorias } from "@/infrastructure/database/schemas/schemas";
import { revalidatePath } from "next/cache";

export async function acaoCriarCategoria(formData: FormData) {
  const nome = formData.get("nome") as string;
  const tipo = formData.get("tipo") as "receita" | "despesa";

  await db.insert(categorias).values({ nome, tipo });
  revalidatePath("/");
}