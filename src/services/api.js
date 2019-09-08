import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mtsufrg-backend.herokuapp.com',
});

export default api;