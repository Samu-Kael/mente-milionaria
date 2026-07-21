import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { FormDespesa } from "@/components/features/despesas/form-despesa";

export default function DespesasPage() {
  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* Lateral fixo */}
      <Sidebar />

      {/* Área principal em tela cheia */}
      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        <Header />

        <div className="max-w-5xl w-full mx-auto">
          <FormDespesa />
        </div>
      </div>
    </div>
  );
}