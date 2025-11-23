// services/api.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
// import { useAuthStore } from '@/hooks/useAuthStore';
// import { refreshTokens } from './TokenService';

const api = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });

const retried = new WeakSet<InternalAxiosRequestConfig>();

// ---------------- request -----------------------------------------------
api.interceptors.request.use((config) => {
    // console.log('request', config)
    // const token = useAuthStore.getState().accessToken;
    // if (token) config.headers!.Authorization = `Bearer ${token}`;
    // return config;
    return config;
});

// ---------------- response ----------------------------------------------
// api.interceptors.response.use(
//   (res) => res,
//   async (error: AxiosError) => {
//     const cfg = error.config as InternalAxiosRequestConfig | undefined;
//     if (!cfg) throw error;                       // nothing we can do

//     if (error.response?.status === 401 && !retried.has(cfg)) {
//       console.log('401 happened')
//       retried.add(cfg);                          // mark as seen once
//       try {
//         const token = await refreshTokens();
//         cfg.headers!.Authorization = `Bearer ${token}`;
//         return api(cfg);                         // ► replay
//       } catch {
//         console.log('could not get refresh token... signing out')
//         useAuthStore.getState().clearAuth();
//       }
//     }
//     throw error;
//   },
// );

export default api;
