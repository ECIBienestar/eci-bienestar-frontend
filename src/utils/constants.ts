export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  USERS: {
    BASE: '/users',
    PROFILE: '/users/profile',
  },
  STATISTICS: {
    BASE: '/statistics',
    REPORTS: '/statistics/reports',
  },
};

export const USER_ROLES = {
  ADMIN: 'admin',
  STUDENT: 'student',
  DOCTOR: 'doctor',
  TRAINER: 'trainer',
  SECRETARY: 'secretary',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  STATISTICS: '/statistics',
} as const;