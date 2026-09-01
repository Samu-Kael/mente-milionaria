import { NextRequest, NextResponse } from 'next/server';
import { criarReceitaHandler } from '@/modules/receitas/handlers/criar-receita.handler';
import { listarReceitasHandler } from '@/modules/receitas/handlers/listar-receitas.handler';

export async function GET() {
  try {
    const dados = await listarReceitasHandler();
    return NextResponse.json(dados ?? []);
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao buscar receitas';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const resultado = await criarReceitaHandler(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao criar receita';
    return NextResponse.json({ mensagem }, { status: 400 });
  }
}