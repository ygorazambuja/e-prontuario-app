import Service from "../../../application/infra/service";



export const doLogin = async user => {
  const service = new Service();
  return  service.api
    .post("/auth", { ...user })
    .then(({ data }) => data)
    .catch(err => {
      throw new Error(err);
    });
};
