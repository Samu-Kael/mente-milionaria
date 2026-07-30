// Salva os dados no objeto global
const globalApp = global as any;
if (!globalApp.receitasDB) globalApp.receitasDB = [];

export const ReceitasRepository = {
  async buscarTodas() {
    return globalApp.receitasDB;
  },

  async criar(dados: any) {
    const novaReceita = {
      id: dados.id || crypto.randomUUID(),
      usuarioId: dados.usuarioId || 'user-default',
      descricao: dados.descricao,
      valor: Number(dados.valor),
      categoria: dados.categoria,
      data: dados.data || new Date().toISOString(),
      createdAt: new Date().toISOString()
    };
    globalApp.receitasDB.push(novaReceita);
    return novaReceita;
  },

  async salvar(dados: any) {
    return await this.criar(dados);
  },

  async deletar(id: string) {
    globalApp.receitasDB = globalApp.receitasDB.filter((item: any) => item.id !== id);
    return true;
  }
};