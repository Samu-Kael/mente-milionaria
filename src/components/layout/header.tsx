"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-[#0d0e11] border border-[#1b1d22] px-6 py-4 rounded-2xl">
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
    </header>
  );
}