import axios from "axios";
import Repository, { baseUrl } from "./Repository";

class ProjectRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async createProject(params) {
    const token = window.localStorage.getItem("token");
    console.log(token);
    const response = await axios.post(
      `${baseUrl}/user/create`,
      { params },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  }

  async getProjects() {
    const token = window.localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/project/getall`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}

export default new ProjectRepository();
