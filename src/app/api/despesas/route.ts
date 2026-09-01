import { NextRequest, NextResponse } from 'next/server';
import { criarDespesaHandler } from '@/modules/despesas/handlers/criar-despesa.handler';
import { listarDespesasHandler } from '@/modules/despesas/handlers/listar-despesa.handler';

export async function GET() {
  try {
    const dados = await listarDespesasHandler();
    return NextResponse.json(dados ?? []);
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao buscar despesas';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const resultado = await criarDespesaHandler(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao criar despesa';
    return NextResponse.json({ mensagem }, { status: 400 });
  }
}