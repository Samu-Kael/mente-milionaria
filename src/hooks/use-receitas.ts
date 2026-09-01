"use client";

import { useEffect, useState } from "react";
import { getReceitasAction } from "@/actions/receitas/get-receitas.action";
import { createReceitaAction } from "@/actions/receitas/create-receita.action";
import { deleteReceitaAction } from "@/actions/receitas/delete-receita.action";
import type { Receita } from "@/shared/types/domain/receita";
import type { CreateReceitaDTO } from "@/modules/receitas/dto/create-receita.dto";

export function useReceitas() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function loadReceitas() {
    try {
      setCarregando(true);
      setErro(null);
      const lista = await getReceitasAction();
      setReceitas(lista);
    } catch (e: unknown) {
      setErro(e instanceof Error ? e.message : "Erro ao carregar receitas");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    void loadReceitas();
  }, []);

  async function adicionarReceita(dados: CreateReceitaDTO) {
    try {
      setSalvando(true);
      setErro(null);
      const listaNova = await createReceitaAction(receitas, dados);
      setReceitas(listaNova);
    } catch (e: unknown) {
      setErro(e instanceof Error ? e.message : "Erro ao criar receita");
    } finally {
      setSalvando(false);
    }
  }

  async function removerReceita(id: string) {
    try {
      setErro(null);
      const listaNova = await deleteReceitaAction(receitas, id);
      setReceitas(listaNova);
    } catch (e: unknown) {
      setErro(e instanceof Error ? e.message : "Erro ao remover receita");
    }
  }

  return { receitas, carregando, salvando, erro, adicionarReceita, removerReceita, refetch: loadReceitas };
}