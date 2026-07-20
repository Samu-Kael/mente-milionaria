import { acaoCriarCategoria } from "@/actions/categorias/create-categoria.action";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FormCategoria() {
  return (
    <Card titulo="Nova Categoria" corDestaque="gray">
      <form action={acaoCriarCategoria} className="space-y-4">
        <Input 
          label="Nome da Categoria" 
          name="nome" 
          placeholder="Ex: Alimentação, Lazer, Salário..." 
          type="text" 
        />

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase mb-1 tracking-wider">
            Tipo da Categoria
          </label>
          <select 
            name="tipo" 
            required 
            className="w-full bg-gray-950 border border-gray-800 rounded-lg p-2.5 text-white text-sm focus:outline-none focus:border-gray-500 transition-colors cursor-pointer"
          >
            <option value="">Selecione o tipo...</option>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>

        <Button cor="emerald" type="submit">Adicionar Categoria</Button>
      </form>
    </Card>
  );
}