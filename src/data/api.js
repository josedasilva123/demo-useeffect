import axios from 'axios'

/*
//Rotas privadas
const authApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 15000,
    headers: {
        "Authorization": "Bearer " + token;
    }
})
*/

//Rotas publicas 
//Criando uma configuração base para API com axios
const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 15000,
})

export default api;