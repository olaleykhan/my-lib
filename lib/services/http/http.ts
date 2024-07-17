import axios, {
  AxiosError, AxiosInstance, AxiosResponse, Method,
} from 'axios';
import { Envs, Headers } from './enums';
import { RequestConfig } from './types';
import { BASE_URL } from './constants';

export default class Http {
  private static env: Envs;

  static {
    const env = import.meta.env.MODE
    if (env === Envs.dev || env === Envs.staging || env === Envs.prod) {
      this.env = env;
    } else {
      this.env = Envs.dev;
    }
  }
  
  public static axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL[Http.env],
    headers: {
      [Headers.CONTENT_TYPE]: 'application/json',
    },
  });

  public static setAuthorization(token: string): void {
    this.axiosInstance.defaults.headers.common[Headers.AUTHORIZATION] = `Bearer ${token}`;
  }

  // intercept API 
  public static onUnauthorized(cb: () => void): void {
    this.axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
      if (error.response?.status === 401) {
        cb();
      }
      return Promise.reject(error);
    });
  }

  public static async request<Response>(requestConfig: RequestConfig & { method: Method }): Promise<AxiosResponse<Response>> {
    return this.axiosInstance.request<Response>({
      method: requestConfig.method,
      url: requestConfig.url,
      params: requestConfig.query,
      headers: requestConfig.headers,
      data: requestConfig.payload,
      responseType: requestConfig.responseType ? requestConfig.responseType : 'json',
    });
  }

  public static async get<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'GET',
    });
  }

  public static async post<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'POST',
    });
  }

  public static async put<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'PUT',
    });
  }

  public static async delete<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'DELETE',
    });
  }

  public static async patch<Response>(requestConfig: RequestConfig): Promise<AxiosResponse<Response>> {
    return Http.request({
      ...requestConfig,
      method: 'PATCH',
    });
  }

  public static getBaseUrl(): string | undefined {
    return this.axiosInstance.defaults.baseURL;
  }
}
