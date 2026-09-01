import { NextRequest, NextResponse } from 'next/server';
import { removerReceitaHandler } from '@/modules/receitas/handlers/remover-receita.handler';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ mensagem: 'ID não informado' }, { status: 400 });
    }

    await removerReceitaHandler(id);
    return NextResponse.json({ sucesso: true });
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao deletar receita';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}