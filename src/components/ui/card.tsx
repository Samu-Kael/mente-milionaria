import React from "react";

interface CardProps {
  titulo: string;
  corDestaque: "emerald" | "rose" | "cyan" | "gray";
  children: React.ReactNode;
}

export function Card({ titulo, corDestaque, children }: CardProps) {
  const cores = {
    emerald: { texto: "text-emerald-400", borda: "border-gray-800 focus-within:border-emerald-500" },
    rose: { texto: "text-rose-500", borda: "border-gray-800 focus-within:border-rose-500" },
    cyan: { texto: "text-cyan-400", borda: "border-gray-800 focus-within:border-cyan-500" },
    gray: { texto: "text-gray-200", borda: "border-gray-800" },
  };

  return (
    <div className={`bg-gray-900 p-6 rounded-2xl border shadow-xl transition-all duration-300 ${cores[corDestaque].borda}`}>
      <h2 className={`text-xl font-bold mb-4 ${cores[corDestaque].texto}`}>
        {titulo}
      </h2>
      {children}
    </div>
  );
}