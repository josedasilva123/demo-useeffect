import React, { useState, useEffect } from 'react'
import { ThemeContainer } from '../../../styles/globals'
import { StyledHeader } from './styles'

const Header = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function fixedElement(){
      if(window.pageYOffset > 600){
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener('scroll', fixedElement);

    return () => {
      window.removeEventListener('scroll', fixedElement);
    }
  }, [])

  return (
    <StyledHeader fixed={fixed}>
        <ThemeContainer>
            <h1>Lista Pokémon</h1>
        </ThemeContainer> 
    </StyledHeader>    
  )
}

export default Header