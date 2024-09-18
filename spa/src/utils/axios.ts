import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // FastAPI backend URL
});

export default axiosInstance;
