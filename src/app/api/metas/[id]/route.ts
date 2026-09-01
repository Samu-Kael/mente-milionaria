import { NextRequest, NextResponse } from 'next/server';
import { removerMetaHandler } from '@/modules/metas/handlers/remover-meta.handler';
import { adicionarSaldoMetaHandler } from '@/modules/metas/handlers/adicionar-saldo-meta.handler';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ mensagem: 'ID não informado' }, { status: 400 });
    }

    await removerMetaHandler(id);
    return NextResponse.json({ sucesso: true });
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao deletar meta';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { valor } = await req.json();

    if (!id || valor === undefined) {
      return NextResponse.json({ mensagem: 'ID e valor são obrigatórios' }, { status: 400 });
    }

    // Passando os dados como um único objeto DTO
    const resultado = await adicionarSaldoMetaHandler({ id, valor: Number(valor) });
    return NextResponse.json(resultado);
  } catch (erro: unknown) {
    const mensagem = erro instanceof Error ? erro.message : 'Erro ao atualizar meta';
    return NextResponse.json({ mensagem }, { status: 500 });
  }
}