import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getItem } from '../utility/localStorageControl';

/**
 * Base API class based on axios
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
   * Intercept response & return data
   */
  private responseIntereptors() {
    this.client.interceptors.response.use(
      ({ data }) => data,
      (error: any) => Promise.reject(error)
    );
  }

  /**
   * Intercept request and tag along auth token
   */
  private requestInterceptors() {
    this.client.interceptors.request.use((config: AxiosRequestConfig) => {
      const originalConfig = config;
      const token = getItem('token');
      originalConfig.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  get(url: string): Promise<AxiosResponse> {
    return this.client.get(url);
  }

  post<D, R = AxiosResponse>(url: string, data: D): Promise<R | any> {
    return this.client.post(url, data).catch(this.handleError);
  }

  put<D, R = AxiosResponse>(url: string, data?: D): Promise<R> {
    return this.client.put(url, data);
  }

  private handleError(error) {
    const { status, data } = error.response;
    return { error: true, status, data };
  }
}
