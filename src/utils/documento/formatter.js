export const formatter = json => {
  return {
    titulo: json.content[0].titulo,
    descricao: json.content[0].descricao,
    itensDocumento: json.content[0].itensDocumento
  };
};
