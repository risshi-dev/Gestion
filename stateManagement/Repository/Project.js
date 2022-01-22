import axios from "axios";
import Repository, { baseUrl } from "./Repository";

class ProjectRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async createProject(params) {
    const response = await axios.post(
      `${baseUrl}/project/create`,
      { params },
      {
        withCredentials: true,
      }
    );

    return response;
  }

  async getProjects() {
    const response = await axios.get(`${baseUrl}/project/getall`, {
      withCredentials: true,
    });
    return response;
  }
}

export default new ProjectRepository();
