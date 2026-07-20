import { AppShell } from "@/core/app-shell";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Mente Milionária",
  description: "Gerenciador de Finanças Pessoais",
  icons: {
    icon: "/images/logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}