import { eq } from "drizzle-orm";
import { db } from "@/infrastructure/database/db";
import { tabelaCategorias } from "@/infrastructure/schemas/schema-categorias";
import type { CreateCategoriaDTO } from "../dto/create-categoria.dto";
import type { Categoria } from "@/shared/types/domain/categoria";

type CategoriaRow = typeof tabelaCategorias.$inferSelect;

function mapearCategoria(row: CategoriaRow): Categoria {
  return {
    id: row.id,
    nome: row.nome,
    cor: row.cor,
    isPadrao: Boolean(row.isPadrao),
  };
}

export const CategoriasRepository = {
  async buscarTodas(): Promise<Categoria[]> {
    const rows = await db.select().from(tabelaCategorias);
    return rows.map(mapearCategoria);
  },

  async buscarPorId(id: string): Promise<Categoria | null> {
    const [categoria] = await db
      .select()
      .from(tabelaCategorias)
      .where(eq(tabelaCategorias.id, id));

    return categoria ? mapearCategoria(categoria) : null;
  },

  async salvar(dados: CreateCategoriaDTO): Promise<Categoria> {
    const [criada] = await db
      .insert(tabelaCategorias)
      .values({
        nome: dados.nome,
        cor: dados.cor,
        isPadrao: dados.isPadrao,
      })
      .returning();

    if (!criada) {
      throw new Error("Não foi possível cadastrar a categoria.");
    }

    return mapearCategoria(criada);
  }
};