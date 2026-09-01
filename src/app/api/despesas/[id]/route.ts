import { NextRequest, NextResponse } from 'next/server';
import { removerDespesaHandler } from '@/modules/despesas/handlers/remover-despesa.handler';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ mensagem: 'ID não informado' }, { status: 400 });
    }

    await removerDespesaHandler(id);
    return NextResponse.json({ sucesso: true });
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao deletar despesa';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}