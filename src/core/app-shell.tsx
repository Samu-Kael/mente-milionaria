import React from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen w-full bg-gray-950 text-white overflow-hidden antialiased">
      <Sidebar />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        <Header />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-950">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}