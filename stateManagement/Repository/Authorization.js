import Repository, { baseUrl } from "./Repository";

class AuthorizationRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async loginRepo(params) {
    console.log(params);
    const reponse = await Repository.post(`${baseUrl}/user/login`, { params });
    return reponse;
  }

  async signinRepo(params) {
    console.log(params);
    const reponse = await Repository.post(`${baseUrl}/user/signin`, { params });
    return reponse;
  }
}

export default new AuthorizationRepository();
