import React, { useState, useEffect } from "react";
import { ThemeContainer } from "../../styles/globals";
import Header from "./Header";
import PokemonCard from "./PokemonCard";
import { StyledList } from "./styles";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    /*  
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(res => res.json())
    .then(res => setPokemons(res.results));
    */
    async function getPokemons(){
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const json = await response.json();  
            setPokemons(json.results);
        } catch (error) {
            console.log('Deu zika!')   
        }        
    }
    getPokemons();
  }, []);

  return (
    <>
      <Header />
      <ThemeContainer>
        <StyledList>
           {pokemons?.length > 0 && pokemons.map((pokemon) => (
               <PokemonCard name={pokemon.name} />
           ))}          
        </StyledList>
      </ThemeContainer>
    </>
  );
};

export default PokemonList;
