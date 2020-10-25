/* eslint-disable class-methods-use-this */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiResponseType } from './types';
import { getItem } from '../utility/localStorageControl';

/**
 * Base API class based on axios
 * @type T api response type
 * @type D request paylod or the data being sent to api
 * @TP TP type parameter of get request
 */
export default class ApiClient {
  private readonly client: AxiosInstance;

  constructor(baseUrl?: string) {
    this.client = axios.create({
      baseURL: baseUrl ?? process.env.NEXT_PUBLIC_API_ENDPOINT,
    });
    this.responseIntereptors();
    this.requestInterceptors();
  }

  /**
   * Axios response interceptor gives us a way to do access the reponse befores sending it
   * to request initiator, It could be used to transform response or perform other task on response
   * ref: https://github.com/axios/axios#interceptors
   * This method Intercept response & destructure data property of AxiosResponse
   * and returs it. Customize it as you wish
   */
  private responseIntereptors() {
    this.client.interceptors.response.use(
      ({ data }) => data,
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * Request interceptor is useful for transforming request before sending request
   * For example here request interceptor is used to tag along the authorizatin header
   * customize as you please
   */
  private requestInterceptors() {
    this.client.interceptors.request.use((config: AxiosRequestConfig) => {
      const originalConfig = config;
      const token = getItem('access_token');

      if (token) {
        originalConfig.headers.Authorization = `Bearer ${token}`;

        return originalConfig;
      }
      return config;
    });
  }

  get<T, TP>(
    url: string,
    params?: TP,
    config?: AxiosRequestConfig
  ): ApiResponseType<T> {
    return this.client
      .get<T, T>(url, { ...config, params })
      .catch(this.handleError);
  }

  post<T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): ApiResponseType<T> {
    return this.client.post<T, T>(url, data, config).catch(this.handleError);
  }

  put<T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): ApiResponseType<T> {
    return this.client.put<T, T>(url, data, config).catch(this.handleError);
  }

  private async handleError(error: AxiosError) {
    return {
      error: true,
      status: error.response?.status,
      data: error.response?.data,
    };
  }
}

export const apiClient = new ApiClient();
