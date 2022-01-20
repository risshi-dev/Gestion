import axios from "axios";
import Repository, { baseUrl } from "./Repository";

class CardRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async createCard(params) {
    const token = window.localStorage.getItem("token");
    console.log(token);
    const response = await axios.post(
      `${baseUrl}/card/create`,
      { params },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  }

  async getCards() {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(
      `${baseUrl}/card/getall`,
      { params },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  async editCard() {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(
      `${baseUrl}/card/edit`,
      { params },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }
}

export default new CardRepository();
