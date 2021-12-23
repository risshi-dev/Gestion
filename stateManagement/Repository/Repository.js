import axios from "axios";
import { store } from "../../pages/_app";

const baseDomain = "http://localhost:5000/api";
const authorization_prefix = "Bearer ";
export const customHeaders = {
  Accept: "application/json",
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
  baseUrl,
  headers: customHeaders,
});
