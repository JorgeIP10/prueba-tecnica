import axios from "axios";
import { API_CUSTOMERS_URL, API_AUTH_URL } from "../../config";

export const customersInstance = axios.create({
  baseURL: API_CUSTOMERS_URL,
  withCredentials: true,
});

export const authInstance = axios.create({
  baseURL: API_AUTH_URL,
  withCredentials: true,
});