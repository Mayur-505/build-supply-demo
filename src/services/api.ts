import { API_BASE_URL } from "@/lib/constants";
import axios from "axios";

interface AxiosParams {
  baseURL?: string;
  headers?: any;
  method?: "get" | "post" | "patch" | "put" | "delete";
  data?: any;
  params?: { [key: string]: string | number };
  url: string;
  isFormData?: boolean;
}

export const api = async ({
  baseURL = API_BASE_URL,
  headers = {},
  method = "get",
  data = null,
  params,
  url,
  isFormData = false,
}: AxiosParams) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });


  const token = localStorage.getItem("token");

  const config = {
    url,
    method,
    data,
    params,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (isFormData) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    };
  }
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + token,
    };
  }

  return instance.request(config);
};
