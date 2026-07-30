import { NextResponse } from 'next/server';
import { ReceitasHandler } from '@/modules/receitas/handlers/receitas.handler';

export async function GET() {
  try {
    const dados = await ReceitasHandler.handleBuscarTodas();
    return NextResponse.json(dados ?? []);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erro ao buscar receitas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resultado = await ReceitasHandler.handleCriar(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erro ao criar receita' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ID não informado' }, { status: 400 });

    await ReceitasHandler.handleDeletar(id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erro ao deletar receita' }, { status: 500 });
  }
}