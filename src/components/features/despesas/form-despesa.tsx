"use client";

import React, { useState } from "react";

interface FormDespesaProps {
  categorias?: Array<{ id: string; nome: string; tipo?: string }>;
}

export function FormDespesa({ categorias = [] }: FormDespesaProps) {
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");

  // Garante que o filter não quebre caso passe algo indefinido
  const categoriasDespesa = (categorias || []).filter(
    (cat) => !cat.tipo || cat.tipo === "DESPESA"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Despesa "${descricao}" no valor de R$ ${valor} salva com sucesso!`);
  };

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-rose-500">Cadastrar Nova Despesa</h1>
        <p className="text-xs text-slate-400 mt-1">
          Preencha os dados abaixo para registrar seus gastos
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Descrição */}
          <div>
            <label className="text-xs font-semibold uppercase text-slate-400 block mb-2">
              Descrição
            </label>
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Ex: Mercado, Aluguel, Passagem..."
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition"
            />
          </div>

          {/* Categoria sem Emojis */}
          <div>
            <label className="text-xs font-semibold uppercase text-slate-400 block mb-2">
              Categoria
            </label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition"
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {categoriasDespesa.length > 0 ? (
                categoriasDespesa.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nome}
                  </option>
                ))
              ) : (
                <>
                  <option value="comida">Comida / Alimentação</option>
                  <option value="viagem">Viagem</option>
                  <option value="moradia">Moradia</option>
                  <option value="transporte">Transporte</option>
                  <option value="lazer">Lazer</option>
                  <option value="saude">Saúde</option>
                  <option value="educacao">Educação</option>
                  <option value="outros">Outros</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Valor */}
          <div>
            <label className="text-xs font-semibold uppercase text-slate-400 block mb-2">
              Valor Gasto (R$)
            </label>
            <input
              type="number"
              step="0.01"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="0,00"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition"
            />
          </div>

          {/* Data */}
          <div>
            <label className="text-xs font-semibold uppercase text-slate-400 block mb-2">
              Data
            </label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="w-full md:w-auto bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-lg shadow-rose-500/20 active:scale-[0.99]"
          >
            Registrar Despesa
          </button>
        </div>
      </form>
    </div>
  );
}