import { acaoCriarMeta } from "@/actions/metas/create-meta.action";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FormMeta() {
  return (
    <Card titulo="Nova Meta Financeira" corDestaque="cyan">
      <form action={acaoCriarMeta} className="space-y-4">
        <Input label="Objetivo" name="objetivo" placeholder="Ex: Reserva de Emergência, Viagem..." type="text" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Valor Alvo (R$)" name="valorAlvo" placeholder="0,00" type="number" step="0.01" />
          <Input label="Prazo Final" name="prazo" type="date" />
        </div>

        <Button cor="cyan" type="submit">Definir Meta</Button>
      </form>
    </Card>
  );
}