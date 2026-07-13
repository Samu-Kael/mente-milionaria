export const metadata = {
  title: "Mente Milionária",
  description: "Gerenciador Financeiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Importação direta do Tailwind via CDN caso o seu projeto não tenha o Tailwind configurado localmente */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#030712' }}>
        {children}
      </body>
    </html>
  );
}