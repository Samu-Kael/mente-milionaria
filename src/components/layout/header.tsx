export function Header() {
  return (
    <header className="w-full bg-gray-900 border-b border-gray-800 h-16 flex items-center justify-between px-6">
      <div>
        <h1 className="text-base font-bold text-gray-200">Visão Geral</h1>
        <p className="text-xs text-gray-500">Bem-vindo ao seu controle financeiro</p>
      </div>

      <div className="flex items-center space-x-4">
        {/* Status discreto integrado ao Header */}
        <div className="flex items-center space-x-2 bg-gray-950 px-3 py-1.5 rounded-full border border-gray-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-gray-400 font-medium">Bando de Dados Local</span>
        </div>
      </div>
    </header>
  );
}