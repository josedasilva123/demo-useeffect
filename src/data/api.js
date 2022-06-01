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

const BASE_URL = "https://pokeapi.co/api/v2/" //String e variavel para facilitar futura manutenção

//Rotas publicas 
//Criando uma configuração base para API com axios
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
})

/* 
    Função recebe um URL em string (com a base: https://pokeapi.co/api/v2/) 
    e retorna uma URL limpa sem a base.

    Ex:
    recebe: https://pokeapi.co/api/v2/avidaefeliz
    retorna: avidaefeliz
*/

export function clearBaseURL(url){
    const newUrl = url.replace(BASE_URL, "");
    return newUrl;
}

export default api;