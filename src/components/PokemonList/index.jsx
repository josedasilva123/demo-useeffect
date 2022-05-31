/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import Header from "./Header";
import PokemonCard from "./PokemonCard";

import { ThemeContainer } from "../../styles/globals";
import { StyledList } from "./styles";

import api from "../../data/api";

/* https://pokeapi.co/api/v2/pokemon?limit=20&offset=0 */
/* GET */

const PokemonList = () => {
  const [ loading, setLoading ] = useState(true); // estado de loading
  const [ pokemonList, setPokemonList ] = useState([]); // estado para receber a lista pokémon

  // Efeito de montagem 
  useEffect(() => {
    // Começa o carregamento
    setLoading(true);
    /* 
    Realiza a requição do tipo GET
    Catch: caso ocorra um erro, da um console.log do erro
    Finally: encerra o carregamento 
    */

    api.get('pokemon?limit=20&offset=0')    
    .then((res) => {
      setPokemonList(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })

    /*
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then((res) => res.json())
    .then((json) => {
      setPokemonList(json.results);
    })
    */

  }, []);
  

  return (
    <>
      <Header />
      <button onClick={() => console.log(pokemonList)}>Testar</button>
      <ThemeContainer>
        { /* Renderização condicional de loading */}
        {loading ? (
          <span>Carregando...</span>
        ) : (
          <StyledList>
          {pokemonList?.results?.map(pokemon => (
            <PokemonCard name={pokemon.name} key={pokemon.name}/>
          ))}       
        </StyledList>
        )}
        
      </ThemeContainer>
    </>
  );
};

export default PokemonList;
