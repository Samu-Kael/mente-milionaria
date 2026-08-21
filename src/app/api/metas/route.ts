import { NextResponse } from 'next/server';
import { MetasHandler } from '@/modules/metas/handlers/criar-meta.handler';

export async function GET() {
  try {
    const dados = await MetasHandler.handleBuscarTodas();
    return NextResponse.json(dados ?? []);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resultado = await MetasHandler.handleCriar(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID não informado' }, { status: 400 });

    await MetasHandler.handleDeletar(id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, valor } = body;
    
    if (!id || !valor) return NextResponse.json({ error: 'ID e valor são obrigatórios' }, { status: 400 });

    const resultado = await MetasHandler.handleAdicionarSaldo(id, Number(valor));
    return NextResponse.json(resultado);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}