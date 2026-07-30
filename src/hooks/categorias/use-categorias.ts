'use client';

import { useState, useEffect } from 'react';
import { getCategoriasUnificadasAction } from '@/actions/categorias/get-categorias.action';
import { createCategoriaAction } from '@/actions/categorias/create-categoria.action';

export function useCategorias() {
  const [categorias, setCategorias] = useState<any[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');
  const [nomeOutraCategoria, setNomeOutraCategoria] = useState<string>('');
  const [isOutraSelected, setIsOutraSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategorias = async () => {
    setIsLoading(true);
    const data = await getCategoriasUnificadasAction();
    setCategorias(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  const handleSelectCategoria = (valor: string) => {
    setCategoriaSelecionada(valor);
    if (valor.toLowerCase() === 'cat_padrao_outra' || valor.toLowerCase() === 'outra') {
      setIsOutraSelected(true);
    } else {
      setIsOutraSelected(false);
      setNomeOutraCategoria('');
    }
  };

  const salvarCategoriaSeNecessario = async (): Promise<string> => {
    if (isOutraSelected && nomeOutraCategoria.trim()) {
      const formData = new FormData();
      formData.append('nome', nomeOutraCategoria);
      
      const result = await createCategoriaAction(formData);
      if (result.success && result.data?.categoria?.nome) {
        await fetchCategorias();
        return result.data.categoria.nome;
      }
    }
    return categoriaSelecionada;
  };

  return {
    categorias,
    isLoading,
    categoriaSelecionada,
    nomeOutraCategoria,
    isOutraSelected,
    handleSelectCategoria,
    setNomeOutraCategoria,
    salvarCategoriaSeNecessario,
    refetch: fetchCategorias,
  };
}