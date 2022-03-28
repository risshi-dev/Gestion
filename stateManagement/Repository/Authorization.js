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
    console.log(response);
    return response;
  }

  async cookieRepo(params) {
    console.log(params);
    const response = await Repository.post(
      `${baseUrl}/user/getuser`,
      { params },
      { withCredentials: true }
    );
    console.log(response);
    return response;
  }

  async signinRepo(params) {
    console.log(params);
    const response = await Repository.post(`${baseUrl}/user/signin`, {
      params,
    });
    return response;
  }

  async logoutRepo() {
    const response = await Repository.get(`${baseUrl}/user/logout`);
    return response;
  }
}

export default new AuthorizationRepository();
