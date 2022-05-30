import React, { useEffect, useState } from "react";
import { ThemeContainer } from "../../styles/globals";
import Header from "./Header";
import PokemonCard from "./PokemonCard";
import { StyledList } from "./styles";

import api from "../../api/api";

/* https://pokeapi.co/api/v2/pokemon?limit=20&offset=0 */

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    api.get('/pokemon?limit=20&offset=0')
    .then((res) => setPokemonList(res.data.results))
    .catch((err) => console.log(err));
    /*
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((res) => res.json())
      .then((res) => setPokemonList(res.results))
      .catch((err) => console.log(err));
    */
  }, []);

  return (
    <>
      <Header />
      <ThemeContainer>
        <StyledList>
          {pokemonList.length > 0 &&
            pokemonList.map((pokemon, index) => (
              <PokemonCard key={pokemon.name} name={pokemon.name} />
            ))}
        </StyledList>
      </ThemeContainer>
    </>
  );
};

export default PokemonList;
