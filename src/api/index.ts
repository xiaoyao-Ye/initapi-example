import axios, { AxiosError, AxiosResponse } from "axios";

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: 'http://localhost:3000',
  // 设置超时时间（10s）
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true
};

const service = axios.create(config);

service.interceptors.request.use(
  (config) => { return config; },
  (error: AxiosError) => { }
)

service.interceptors.response.use(
  (response: AxiosResponse) => { return response },
  (error: AxiosError) => { }
)


export default service;