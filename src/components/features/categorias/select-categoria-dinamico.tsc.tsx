'use client';

import { useState } from 'react';

interface SelectCategoriaDinamicoProps {
  categoriasExistentes: string[];
  name?: string;
}

export function SelectCategoriaDinamico({
  categoriasExistentes,
  name = 'categoria',
}: SelectCategoriaDinamicoProps) {
  const [selecao, setSelecao] = useState<string>(categoriasExistentes[0] || 'Alimentação');
  const [categoriaPersonalizada, setCategoriaPersonalizada] = useState<string>('');

  const isOutra = selecao === 'OUTRA_PERSONALIZADA';

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Categoria</label>
      
      <select
        value={selecao}
        onChange={(e) => setSelecao(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
      >
        {categoriasExistentes.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
        <option value="OUTRA_PERSONALIZADA">+ Outra (Criar Personalizada)</option>
      </select>

      {isOutra && (
        <input
          type="text"
          placeholder="Digite o nome da nova categoria..."
          value={categoriaPersonalizada}
          onChange={(e) => setCategoriaPersonalizada(e.target.value)}
          required
          className="w-full bg-zinc-800 border border-emerald-500 rounded-lg p-2.5 text-white focus:outline-none"
        />
      )}

      <input
        type="hidden"
        name={name}
        value={isOutra ? categoriaPersonalizada : selecao}
      />
    </div>
  );
}