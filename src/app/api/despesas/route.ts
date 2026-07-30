import { NextResponse } from 'next/server';
import { DespesasHandler } from '@/modules/despesas/handlers/despesas.handler';

export async function GET() {
  try {
    const dados = await DespesasHandler.handleBuscarTodas();
    return NextResponse.json(dados ?? []);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erro ao buscar despesas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resultado = await DespesasHandler.handleCriar(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erro ao criar despesa' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ID não informado' }, { status: 400 });

    await DespesasHandler.handleDeletar(id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erro ao deletar despesa' }, { status: 500 });
  }
}