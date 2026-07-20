import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cor: "emerald" | "rose" | "cyan";
  children: React.ReactNode;
}

export function Button({ cor, children, ...props }: ButtonProps) {
  const cores = {
    emerald: "bg-emerald-500 hover:bg-emerald-600 text-gray-950",
    rose: "bg-rose-500 hover:bg-rose-600 text-white",
    cyan: "bg-cyan-500 hover:bg-cyan-600 text-gray-950",
  };

  return (
    <button
      {...props}
      className={`w-full font-bold p-3 rounded-lg transition-all active:scale-[0.99] text-sm shadow-md ${cores[cor]}`}
    >
      {children}
    </button>
  );
}