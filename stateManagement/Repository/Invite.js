import axios from "axios";
import Repository, { baseUrl } from "./Repository";

class InviteRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async sendInvite(params) {
    //console.log(params);
    const response = await axios.post(
      `${baseUrl}/project/sendinvite`,
      { params },
      {
        withCredentials: true,
      }
    );
    //console.log(response);
    return response;
  }
  async getInvites(params) {
    //console.log(params);
    const response = await axios.post(
      `${baseUrl}/project/getinvites`,
      { params },
      {
        withCredentials: true,
      }
    );
    //console.log(response);
    return response;
  }
  async acceptInvite(params) {
    //console.log(params);
    const response = await axios.post(
      `${baseUrl}/project/inviteresponse`,
      { params },
      {
        withCredentials: true,
      }
    );
    //console.log(response);
    return response;
  }
}

export default new InviteRepository();
