import axios from 'axios';

import { logoutUser } from '../utils';

const BASE_URL =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/api'
        : '';

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

apiClient.interceptors.request.use(config => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response && Number(error.response.status) === 401) {
            logoutUser();
        }
        return Promise.reject(error);
    },
);
