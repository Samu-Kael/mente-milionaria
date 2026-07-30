const globalApp = global as any;
if (!globalApp.metasDB) globalApp.metasDB = [];

export const MetasRepository = {
  async buscarTodas() {
    return globalApp.metasDB;
  },

  async criar(dados: any) {
    const valorObj = Number(dados.valorObjetivo || dados.valorAlvo || dados.valor || 0);
    const novaMeta = {
      id: dados.id || crypto.randomUUID(),
      usuarioId: dados.usuarioId || 'user-default',
      titulo: dados.titulo,
      valorObjetivo: valorObj,
      prazo: dados.prazo,
      acumulado: Number(dados.acumulado || 0),
      createdAt: new Date().toISOString()
    };
    globalApp.metasDB.push(novaMeta);
    return novaMeta;
  },

  async deletar(id: string) {
    globalApp.metasDB = globalApp.metasDB.filter((m: any) => m.id !== id);
    return true;
  },

  async adicionarSaldo(id: string, valor: number) {
    const metaIndex = globalApp.metasDB.findIndex((m: any) => m.id === id);
    if (metaIndex !== -1) {
      globalApp.metasDB[metaIndex].acumulado = (Number(globalApp.metasDB[metaIndex].acumulado) || 0) + Number(valor);
      return globalApp.metasDB[metaIndex];
    }
    throw new Error('Meta não encontrada.');
  }
};