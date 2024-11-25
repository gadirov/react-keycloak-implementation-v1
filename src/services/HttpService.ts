import axios, { AxiosRequestConfig } from "axios";
import { keycloak } from "../keycloak/Keycloak";

const axiosInstance = axios.create({
  baseURL: `/`,
});

export const post = <T>(url: string, data: T, config?: AxiosRequestConfig) =>
  axiosInstance.post(url, data, config).then((res) => res.data as T);

export const put = <T>(url: string, data: T, config?: AxiosRequestConfig) =>
  axiosInstance.put(url, data, config).then((res) => res.data);

export const get = <T>(url: string, config?: AxiosRequestConfig) =>
  axiosInstance.get(url, config).then((res) => res.data as T);

export const deleteRequest = (url: string) =>
  axiosInstance.delete(url).then((res) => res.data);

axiosInstance.interceptors.request.use(
  (config) => {
    const cb = () => {
      config.headers = config.headers ?? {};
      config.headers.authorization = `Bearer ${keycloak.token}`;
      return Promise.resolve(config);
    };
    return keycloak.updateToken(5).then(cb).catch(keycloak.login);
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    //TODO tobe implemented
    console.error(error);
  }
);

export default axiosInstance;
