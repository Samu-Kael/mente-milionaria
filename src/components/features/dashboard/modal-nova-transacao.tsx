'use client';

import { useTransacoes } from '@/hooks/transacoes/use-transacoes';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';

export function ModalNovaTransacao() {
  const { isModalOpen, isSubmitting, errorMsg, openModal, closeModal, handleCreateTransacao } = useTransacoes();

  return (
    <>
      <Button onClick={openModal} variant="primary">
        + Nova Transação
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 w-full max-w-md shadow-2xl text-zinc-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Nova Transação</h2>
              <Button onClick={closeModal} variant="ghost" className="!p-1">✕</Button>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
                {errorMsg}
              </div>
            )}

            <form action={handleCreateTransacao} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Tipo"
                  name="tipo"
                  required
                  options={[
                    { value: 'DESPESA', label: 'Despesa (-)' },
                    { value: 'RECEITA', label: 'Receita (+)' },
                  ]}
                />
                <Input
                  label="Data"
                  type="date"
                  name="data"
                  required
                />
              </div>

              <Input
                label="Descrição"
                type="text"
                name="descricao"
                placeholder="Ex: Supermercado"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Valor (R$)"
                  type="number"
                  step="0.01"
                  name="valor"
                  placeholder="0.00"
                  required
                />
                <Select
                  label="Categoria"
                  name="categoria"
                  required
                  options={[
                    { value: 'Alimentação', label: 'Alimentação' },
                    { value: 'Moradia', label: 'Moradia' },
                    { value: 'Transporte', label: 'Transporte' },
                    { value: 'Outros', label: 'Outros' },
                  ]}
                />
              </div>

              <div className="flex justify-end gap-3 pt-6 mt-2 border-t border-zinc-800/50">
                <Button type="button" onClick={closeModal} variant="secondary">
                  Cancelar
                </Button>
                <Button type="submit" variant="primary" isLoading={isSubmitting}>
                  Salvar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}