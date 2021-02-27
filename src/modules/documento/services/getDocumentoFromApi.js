import axios from "axios";

const getDocumentoFromApi = async titulo => {
  const { data } = await axios.get(
    `http://localhost:8080/eprontuario-api/controle-item-documento/documento?titulo=${titulo}`
  );
  return data;
};

export default getDocumentoFromApi;
