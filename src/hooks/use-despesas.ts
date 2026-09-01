"use client";

import { useEffect, useState } from "react";
import { getDespesasAction } from "@/actions/despesas/get-despesas.action";
import { createDespesaAction } from "@/actions/despesas/create-despesa.action";
import { deleteDespesaAction } from "@/actions/despesas/delete-despesa.action";
import type { Despesa } from "@/shared/types/domain/despesa";
import type { CreateDespesaDTO } from "@/modules/despesas/dto/create-despesa.dto";

export function useDespesas() {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function loadDespesas() {
    try {
      setCarregando(true);
      setErro(null);
      const lista = await getDespesasAction();
      setDespesas(lista);
    } catch (e: unknown) {
      setErro(e instanceof Error ? e.message : "Erro ao carregar despesas");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    void loadDespesas();
  }, []);

  async function adicionarDespesa(dados: CreateDespesaDTO) {
    try {
      setSalvando(true);
      setErro(null);
      const listaNova = await createDespesaAction(despesas, dados);
      setDespesas(listaNova);
    } catch (e: unknown) {
      setErro(e instanceof Error ? e.message : "Erro ao criar despesa");
    } finally {
      setSalvando(false);
    }
  }

  async function removerDespesa(id: string) {
    try {
      setErro(null);
      const listaNova = await deleteDespesaAction(despesas, id);
      setDespesas(listaNova);
    } catch (e: unknown) {
      setErro(e instanceof Error ? e.message : "Erro ao remover despesa");
    }
  }

  return { despesas, carregando, salvando, erro, adicionarDespesa, removerDespesa, refetch: loadDespesas };
}