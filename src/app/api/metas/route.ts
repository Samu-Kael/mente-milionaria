import { NextRequest, NextResponse } from 'next/server';
import { criarMetaHandler } from '@/modules/metas/handlers/criar-meta.handler';
import { listarMetasHandler } from '@/modules/metas/handlers/listar-metas.handler';

export async function GET() {
  try {
    const dados = await listarMetasHandler();
    return NextResponse.json(dados ?? []);
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao buscar metas';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const resultado = await criarMetaHandler(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao criar meta';
    return NextResponse.json({ mensagem }, { status: 400 });
  }
}