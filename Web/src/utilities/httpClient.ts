import axios from 'axios';

const httpClient = axios.create({
  // Global Config
});

export function get(url: string, params: string) {
  return httpClient.get(url, { params });
}

export function post(url: string, data: any) {
  return httpClient.post(url, data);
}

export function put(url: string, data: any) {
  return httpClient.put(url, data);
}

export function del(url: string) {
  return httpClient.delete(url);
}

