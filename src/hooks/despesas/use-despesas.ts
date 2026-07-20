import { useState, useTransition } from "react";
import { acaoCriarDespesa } from "@/actions/despesas/create-despesas.action";

export function useDespesas() {
  const [isPending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);

  async function cadastrarDespesa(formData: FormData) {
    setErro(null);
    setSucesso(false);

    startTransition(async () => {
      try {
        await acaoCriarDespesa(formData);
        setSucesso(true);
      } catch (err) {
        setErro("Não foi possível registrar a despesa. Verifique os dados.");
        console.error(err);
      }
    });
  }

  return {
    cadastrarDespesa,
    isPending,
    erro,
    sucesso,
  };
}