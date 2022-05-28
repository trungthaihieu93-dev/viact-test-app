import axios, { AxiosRequestConfig } from 'axios';

import { API_BASE_URL, API_TIMEOUT } from '../../core/config/api';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
});

export const getOptions = (
  moreOptions?: AxiosRequestConfig<any>
): AxiosRequestConfig<any> => ({
  headers: {
    Authorization: window?.localStorage.getItem('jwt') || '',
  },
  ...moreOptions,
});

export function getGetReq(url: string) {
  return instance.get(url, getOptions());
}

export function getPostReq<T>(url: string, body: T) {
  return instance.post(url, body, getOptions());
}

export function getPutReq<T>(url: string, body: T) {
  return instance.put(url, body, getOptions());
}

export function getDeleteReq(url: string) {
  return instance.delete(url, getOptions());
}
