'use server'

import { db } from "@/infrastructure/database/client";
import { metas } from "@/infrastructure/database/schemas/schemas";
import { revalidatePath } from "next/cache";

export async function acaoCriarMeta(formData: FormData) {
  const objetivo = formData.get("objetivo") as string;
  const valorAlvo = Math.round(parseFloat(formData.get("valorAlvo") as string) * 100);
  const prazo = new Date(formData.get("prazo") as string);

  await db.insert(metas).values({ objetivo, valorAlvo, prazo });
  revalidatePath("/");
}