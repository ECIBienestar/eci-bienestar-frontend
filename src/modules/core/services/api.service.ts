import api from '../../../utils/axios.config';
import { ApiResponse } from '../../../types/global';

class ApiService {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await api.get(endpoint);
    return response.data;
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    const response = await api.post(endpoint, data);
    return response.data;
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    const response = await api.put(endpoint, data);
    return response.data;
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await api.delete(endpoint);
    return response.data;
  }
}

export const apiService = new ApiService();