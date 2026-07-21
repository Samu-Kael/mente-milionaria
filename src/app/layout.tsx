import '../assets/styles/globals.css';

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
    <html lang="pt-BR" className="dark">
      <body className="bg-gray-950 text-gray-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}