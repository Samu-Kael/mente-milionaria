export function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-md px-6 flex items-center justify-between text-zinc-100 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-zinc-400 hidden sm:inline">Visão Geral do Sistema</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5 pl-3 border-l border-zinc-800">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center font-bold text-sm text-white shadow-md">
            U
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-xs font-medium text-zinc-200">Usuário Padrão</span>
            <span className="block text-[10px] text-emerald-400">Conta Ativa</span>
          </div>
        </div>
      </div>
    </header>
  );
}