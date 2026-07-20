import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Mente Milionária",
  description: "Gerenciador de Finanças Pessoais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-950 text-white flex h-screen overflow-hidden font-sans">
        
        <Sidebar />

        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <Header />

          <main className="flex-1 overflow-y-auto p-6 bg-gray-950">
            {children}
          </main>

          <Footer />
        </div>

      </body>
    </html>
  );
}