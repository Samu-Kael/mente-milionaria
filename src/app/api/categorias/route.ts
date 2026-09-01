import { NextRequest, NextResponse } from 'next/server';
import { criarCategoriaHandler } from '@/modules/categorias/handlers/criar-categoria.handler';
import { listarCategoriasHandler } from '@/modules/categorias/handlers/listar-categorias.handler';

export async function GET() {
  try {
    const dados = await listarCategoriasHandler();
    return NextResponse.json(dados ?? []);
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao buscar categorias';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const resultado = await criarCategoriaHandler(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao criar categoria';
    return NextResponse.json({ mensagem }, { status: 400 });
  }
}