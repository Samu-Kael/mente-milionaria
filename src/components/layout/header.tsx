import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900 border-b border-gray-800 px-6 py-4 h-16">
      <div className="flex items-center gap-3">
        <Image 
          src="/images/logo.png" 
          alt="Logo Mente Milionária" 
          width={32} 
          height={32}
          className="object-contain"
        />
        <span className="text-white font-bold text-lg tracking-wider">
          MENTE MILIONÁRIA
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-white">Usuário Master</p>
          <p className="text-xs text-emerald-500">Premium</p>
        </div>
        
        <div className="w-9 h-9 rounded-full border border-gray-700 overflow-hidden relative flex items-center justify-center">
          <Image 
            src="/images/avatar.png" 
            alt="Avatar do Usuário" 
            width={36} 
            height={36}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </header>
  );
}