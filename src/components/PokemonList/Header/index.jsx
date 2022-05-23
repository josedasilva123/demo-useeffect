import React from 'react'
import { ThemeContainer } from '../../../styles/globals'
import { StyledHeader } from './styles'

const Header = () => {

  return (
    <StyledHeader>
        <ThemeContainer>
            <h1>Lista Pokémon</h1>
        </ThemeContainer> 
    </StyledHeader>    
  )
}

export default Header