declare global {
  interface Window {
    API_URL: string;
  }
}

export type UserRole = 'admin' | 'student' | 'doctor' | 'trainer' | 'secretary';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export {};