/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import Header from "./Header";
import PokemonCard from "./PokemonCard";

import { FlexRow, ThemeButton, ThemeContainer } from "../../styles/globals";
import { StyledList } from "./styles";

import api, { clearBaseURL } from "../../data/api";

/* https://pokeapi.co/api/v2/pokemon?limit=20&offset=0 */
/* GET */

const PokemonList = () => {
  const [fixed, setFixed] = useState(false); //Estado boleano par ao fixedScroll

  const [loading, setLoading] = useState(true); // estado de carregamento
  const [currentPokemon, setCurrentPokemon] = useState(null); // estado que receberá o pokemon atual
  const [currentPage, setCurrentPage] = useState("pokemon?limit=20&offset=0"); //url da página atual
  const [pokemonPage, setPokemonPage] = useState({}); //objeto da pagina atual, incluindo results, next e previous

  //EFEITO DE FIXAR ELEMENTO NA ROLAGEM
  useEffect(() => {
    //função JS
    function fixedScroll(){
      //Se a distância de rolagem em relação ao topo for superior a 600
      if(window.pageYOffset > 600){
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    //fixedScroll é adiciona como evento scroll, a janela
    window.addEventListener('scroll', fixedScroll);

    //Desmontagem
    return () => {
      window.removeEventListener('scroll', fixedScroll)
    }
  }, [])
  //Acontece na montagem

  //EFEITO DE CARREGAMENTO E PAGINAÇÃO
  useEffect(() => {
    setLoading(true);
    api
      //Ao invés de um link chumbado, a url da requisição é setada com o estado CurrentPage
      .get(currentPage)
      .then((res) => {
        setPokemonPage(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, ]);

  /*
    Agora, além do efeito acontecer na montagem, ele acontece toda vez que
    o currentPage é alterado (resultando consequentemente em uma nova requisição)
  */  

  function loadPokemon(url) {
    const newUrl = clearBaseURL(url);

    api.get(newUrl)
    .then((res) => {
      setCurrentPokemon(res.data);
    });
  }

  /* name, id (número), sprites.front_default */
  return (
    <>
      <Header fixed={fixed} />

      <ThemeContainer>
        {loading ? (
          <span>Carregando...</span>
        ) : (
          <>
            { /* Componente renderizado condicionalmente, caso haja currentPokemon */}
            {currentPokemon && (
              <FlexRow
                gap="2rem"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <img
                  src={currentPokemon.sprites.front_default}
                  alt={currentPokemon.name}
                /> 

                <h2>
                  <span>#{currentPokemon.id}</span> {currentPokemon.name}
                </h2>
              </FlexRow>
            )}

            <FlexRow flexDirection="column" gap="2rem">
              { 
                /* 
                  Paginação, cada botão verifica se o link retornado da api, 
                  presente em pokemonPage é válido (para estar habilitado),
                  e também recebe um evento de click que modifica currentPage
                  com a url limpa (SEM a base url já configurado em api/axios)
                */
              }
              <FlexRow alignItems="center" justifyContent="space-between">
                <ThemeButton
                  disabled={!pokemonPage.previous}
                  onClick={() =>
                    setCurrentPage(clearBaseURL(pokemonPage.previous))
                  }
                >
                  Back
                </ThemeButton>

                <ThemeButton
                  disabled={!pokemonPage.next}
                  onClick={() => setCurrentPage(clearBaseURL(pokemonPage.next))}
                >
                  Next
                </ThemeButton>
              </FlexRow>

              { /*
                Renderização map de pokémonPage.results (caso hajam resultados)
                O results modifica por conta nova requisição gerada pelo efeito de paginação
              */ }    

              <StyledList>
                {pokemonPage?.results?.map((pokemon) => (
                  <PokemonCard key={pokemon.name} name={pokemon.name} onClick={() => loadPokemon(pokemon.url)} />
                ))}
              </StyledList>
            </FlexRow>
          </>
        )}
      </ThemeContainer>
    </>
  );
};

export default PokemonList;
