import axios from "axios";
import { sendInvite } from "../Project/action";
import Repository, { baseUrl } from "./Repository";

class ProjectRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async createProject(params) {
    //console.log(params);
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

  async getTeam(params) {
    const response = await axios.post(
      `${baseUrl}/project/getTeams`,
      {
        params,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  }

  async deleteProject(params) {
    const response = await axios.post(
      `${baseUrl}/project/deleteProject`,
      {
        params,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  }
}

export default new ProjectRepository();
