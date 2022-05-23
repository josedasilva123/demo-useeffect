import React from "react";
import { ThemeContainer } from "../../styles/globals";
import Header from "./Header";
import PokemonCard from "./PokemonCard";
import { StyledList } from "./styles";

const PokemonList = () => {
  return (
    <>
      <Header />
      <ThemeContainer>
        <StyledList>
          <PokemonCard name="Bulbasaur" />
          <PokemonCard name="Charmander" />
          <PokemonCard name="Squirtle" />          
        </StyledList>
      </ThemeContainer>
    </>
  );
};

export default PokemonList;
