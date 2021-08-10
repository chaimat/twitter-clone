import Axios from "axios";

export const localAPI = Axios.create({
  baseURL: 'http://localhost:8000'
});