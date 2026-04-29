import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Interceptor: Agrega el token automáticamente a cada petición
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;