import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_BASE_URL, API_TIMEOUT } from '../../core/config/api';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
});

export const getOptions = (
  moreOptions?: AxiosRequestConfig<any>
): AxiosRequestConfig<any> => ({
  headers: {
    Authorization: `Bearer ${window?.localStorage.getItem('jwt') || ''}`,
  },
  ...moreOptions,
});

export function getGetReq<T>(
  url: string,
  options?: AxiosRequestConfig<any>
): Promise<AxiosResponse<T>> {
  return instance.get(url, getOptions(options));
}

export function getPostReq<T>(
  url: string,
  body: T,
  options?: AxiosRequestConfig<any>
): Promise<AxiosResponse> {
  return instance.post(url, body, getOptions(options));
}

export function getPutReq<T>(
  url: string,
  body: T,
  options?: AxiosRequestConfig<any>
): Promise<AxiosResponse> {
  return instance.put(url, body, getOptions(options));
}

export function getDeleteReq(
  url: string,
  options?: AxiosRequestConfig<any>
): Promise<AxiosResponse> {
  return instance.delete(url, getOptions(options));
}
