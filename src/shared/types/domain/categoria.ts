export interface Categoria {
  id: string;
  nome: string;
  cor: string;
  isPadrao: boolean;
}

export type NovaCategoria = Omit<Categoria, "id">;

export const CATEGORIAS_PADRAO: Categoria[] = [
  { id: 'cat_padrao_1', nome: 'Alimentação', cor: '#EF4444', isPadrao: true },
  { id: 'cat_padrao_2', nome: 'Transporte', cor: '#3B82F6', isPadrao: true },
  { id: 'cat_padrao_3', nome: 'Moradia', cor: '#10B981', isPadrao: true },
  { id: 'cat_padrao_4', nome: 'Lazer', cor: '#F59E0B', isPadrao: true },
  { id: 'cat_padrao_5', nome: 'Saúde', cor: '#8B5CF6', isPadrao: true },
  { id: 'cat_padrao_6', nome: 'Educação', cor: '#6366F1', isPadrao: true },
  { id: 'cat_padrao_7', nome: 'Salário', cor: '#14B8A6', isPadrao: true },
  { id: 'cat_padrao_8', nome: 'Investimentos', cor: '#84CC16', isPadrao: true },
  { id: 'cat_padrao_outra', nome: 'Outra', cor: '#6B7280', isPadrao: true },
];