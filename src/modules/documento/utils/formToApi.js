import axios from "axios";

export const formToApi = formData => {
  formData.itemDocumentos.map(item => {
    let docModel = {};
    docModel.tituloDocumento = formData.tituloDocumento;
    docModel.descricao = item.descricao;
    docModel.isItemDocumentoObrigatorio = item.isItemDocumentoObrigatorio;
    docModel.qtdMaximaRegistros = item.qtdMaximaRegistros;
    docModel.tituloItemDocumento = item.tituloItemDocumento;
    docModel.situacao = "ATIVO";

    switch (item.tipoCampo) {
      case "Texto":
        docModel.tipoItem = "STRING";
        break;
      case "Número":
        docModel.tipoItem = "DOUBLE";
        break;
      case "Sim ou Não":
        docModel.tipoItem = "BOOLEAN";
        break;
      case "Data e Hora":
        docModel.tipoItem = "DATAHORA";
        break;
      default:
        break;
    }
    axios.post(
      "http://localhost:8080/eprontuario-api/controle-item-documento",
      { ...docModel }
    );
  });

  // TODO tipoCampo
};
