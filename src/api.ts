import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const Get = <T>(url: string, params?: any): Promise<T | false> => {
  const request = instance.get(url, {
    params,
  });

  const getPromise = request
    .then((response: AxiosResponse<T>) => ({
      data: response.data,
    }))
    .then((response) => {
      return response.data;
    });

  return getPromise;
};