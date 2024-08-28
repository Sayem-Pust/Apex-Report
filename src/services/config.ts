import axios from "axios";

const { NEXT_APP_BASE_URL_LOCAL_HOST } = process.env;

const clientAxios = axios.create({
  baseURL: NEXT_APP_BASE_URL_LOCAL_HOST || "http://localhost:8000",
});

export default clientAxios;
