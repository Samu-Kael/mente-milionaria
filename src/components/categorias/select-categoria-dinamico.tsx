'use client';

import { useCategorias } from '@/hooks/use-categorias';

export function SelectCategoriaDinamico() {
  const { 
    categorias, 
    categoriaSelecionada, 
    handleSelectCategoria, 
    isOutraSelected, 
    nomeOutraCategoria, 
    setNomeOutraCategoria,
    carregando
  } = useCategorias();

  if (carregando) {
    return <p className="text-sm text-gray-500">Carregando categorias...</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col space-y-1">
        <label htmlFor="categoria" className="text-sm font-medium">
          Categoria
        </label>
        <select
          id="categoria"
          name="categoria"
          value={categoriaSelecionada}
          onChange={(e) => handleSelectCategoria(e.target.value)}
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-2 text-white focus:ring-2 focus:ring-emerald-500"
          required
        >
          <option value="" disabled>
            Selecione uma categoria...
          </option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.nome}>
              {cat.nome}
            </option>
          ))}
        </select>
      </div>

      {isOutraSelected && (
        <div className="flex flex-col space-y-1">
          <label htmlFor="nomeOutraCategoria" className="text-sm font-medium text-emerald-400">
            Qual é a nova categoria?
          </label>
          <input
            type="text"
            id="nomeOutraCategoria"
            value={nomeOutraCategoria}
            onChange={(e) => setNomeOutraCategoria(e.target.value)}
            placeholder="Ex: Assinaturas de Streaming"
            className="w-full rounded-md border border-emerald-500/50 bg-zinc-900 p-2 text-white focus:ring-2 focus:ring-emerald-500"
            required={isOutraSelected}
          />
        </div>
      )}
    </div>
  );
}