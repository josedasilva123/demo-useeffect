import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 6000,
})

export default api;