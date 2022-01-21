import Repository, { baseUrl } from "./Repository";

class AuthorizationRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async loginRepo(params) {
    console.log(params);
    const response = await Repository.post(
      `${baseUrl}/user/login`,
      { params },
      { withCredentials: true }
    );
    return response;
  }

  async signinRepo(params) {
    console.log(params);
    const response = await Repository.post(`${baseUrl}/user/signin`, {
      params,
    });
    return response;
  }
}

export default new AuthorizationRepository();
