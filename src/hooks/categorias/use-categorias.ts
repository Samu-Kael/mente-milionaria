import { useState, useTransition } from "react";
import { acaoCriarCategoria } from "@/actions/categorias/create-categoria.action";

export function useCategorias() {
  const [isPending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState(false);

  async function cadastrarCategoria(formData: FormData) {
    setErro(null);
    setSucesso(false);

    startTransition(async () => {
      try {
        await acaoCriarCategoria(formData);
        setSucesso(true);
      } catch (err) {
        setErro("Erro ao salvar categoria. Certifique-se de que o nome é válido.");
        console.error(err);
      }
    });
  }

  return {
    cadastrarCategoria,
    isPending,
    erro,
    sucesso,
  };
}