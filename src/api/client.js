import axios from "axios";
const url = "https://api.thecatapi.com/v1";
export const AxiosClient = axios.create({
  baseURL: url,
});
