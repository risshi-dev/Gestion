import Repository, { baseUrl } from "./Repository";

class ProjectRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async createProject(params) {
    console.log(params);
    const reponse = await Repository.post(`${baseUrl}/user/create`, { params });
    console.log(response);
    return reponse;
  }
}

export default new ProjectRepository();
