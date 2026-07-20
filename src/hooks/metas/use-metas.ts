import { useState, useTransition } from "react";
import { acaoCriarMeta } from "@/actions/metas/create-meta.action";

export function useMetas() {
  const [isPending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);

  async function cadastrarMeta(formData: FormData) {
    setErro(null);
    setSucesso(false);

    startTransition(async () => {
      try {
        await acaoCriarMeta(formData);
        setSucesso(true);
      } catch (err) {
        setErro("Erro ao criar nova meta. Tente atualizar o prazo.");
        console.error(err);
      }
    });
  }

  return {
    cadastrarMeta,
    isPending,
    erro,
    sucesso,
  };
}