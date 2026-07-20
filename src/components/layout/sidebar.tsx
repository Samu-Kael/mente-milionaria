export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex-col justify-between p-6 h-full md:flex hidden">
      <div className="space-y-8">
        {/* Logo / Branding */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🧠</span>
          <span className="text-lg font-black tracking-wider bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            MM FLOATS
          </span>
        </div>

        {/* Links de Navegação */}
        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-3 bg-gray-950 text-emerald-400 p-3 rounded-xl font-medium text-sm border border-gray-800">
            <span>📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-gray-950 p-3 rounded-xl font-medium text-sm transition-colors">
            <span>🎯</span>
            <span>Metas</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-gray-950 p-3 rounded-xl font-medium text-sm transition-colors">
            <span>⚙️</span>
            <span>Configurações</span>
          </a>
        </nav>
      </div>

      {/* Perfil do Usuário Simulado */}
      <div className="border-t border-gray-800 pt-4 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-gray-950">
          U
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200">Usuário Pro</p>
          <p className="text-xs text-gray-500">Mente Milionária</p>
        </div>
      </div>
    </aside>
  );
}