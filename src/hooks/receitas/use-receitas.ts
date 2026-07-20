import { useState, useTransition } from "react";
import { acaoCriarReceita } from "@/actions/receitas/create-receitas.action";

export function useReceitas() {
  const [isPending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);

  async function cadastrarReceita(formData: FormData) {
    setErro(null);
    setSucesso(false);

    startTransition(async () => {
      try {
        await acaoCriarReceita(formData);
        setSucesso(true);
      } catch (err) {
        setErro("Não foi possível salvar a receita. Tente novamente.");
        console.error(err);
      }
    });
  }

  return {
    cadastrarReceita,
    isPending,
    erro,
    sucesso,
  };
}