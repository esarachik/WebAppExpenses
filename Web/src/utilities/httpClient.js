import axios from 'axios';

const httpClient = axios.create({
  // Global Config
});

export function get(url, params) {
  return httpClient.get(url, { params });
}

export function post(url, data) {
  return httpClient.post(url, data);
}

export function put(url, data) {
  return httpClient.put(url, data);
}

export function del(url) {
  return httpClient.delete(url);
}

