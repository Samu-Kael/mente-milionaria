import { ReactNode } from "react";
import { CardResumoFinanceiro, TransacaoMockada } from "../financeiro";

// Tipagem das Props de containers estruturais gerais
export interface LayoutProps {
  children: ReactNode;
}

// Tipagem para os Cards indicadores do topo do Dashboard
export interface CardIndicadorProps {
  dados: CardResumoFinanceiro;
}

// Tipagem para a tabela que listará os registros
export interface TabelaTransacoesProps {
  lista: TransacaoMockada[];
}

// Tipagem para os itens individuais dentro da Sidebar de navegação
export interface ItemMenuSidebarProps {
  rotulo: string;
  url: string;
  icone?: string;
  ativo?: boolean;
}