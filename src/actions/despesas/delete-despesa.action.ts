'use server'

import { db } from "@/infrastructure/database/client";
import { despesas } from "@/infrastructure/database/schemas/schemas";
import { revalidatePath } from "next/cache";

export async function acaoCriarDespesa(formData: FormData) {
  const descricao = formData.get("descricao") as string;
  const valor = Math.round(parseFloat(formData.get("valor") as string) * 100);
  const data = formData.get("data") as string;
  const categoriaId = parseInt(formData.get("categoriaId") as string);

  await db.insert(despesas).values({ descricao, valor, data, categoriaId });
  revalidatePath("/");
}