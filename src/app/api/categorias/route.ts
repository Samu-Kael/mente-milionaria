import { NextResponse } from 'next/server';
import { CategoriasHandler } from '@/modules/categorias/handlers/categorias.handler';

export async function GET() {
  try {
    const dados = await CategoriasHandler.handleBuscarTodas();
    return NextResponse.json(dados);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resultado = await CategoriasHandler.handleCriar(body);
    return NextResponse.json(resultado, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}