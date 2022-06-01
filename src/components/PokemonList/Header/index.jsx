import React from 'react'
import { ThemeContainer } from '../../../styles/globals'
import { StyledHeader } from './styles'

const Header = ({ fixed }) => {
  /* Recebe fixed e manda para dentro do styled components */
  return (
    <StyledHeader fixed={fixed}>
        <ThemeContainer>
            <h1>Lista Pokémon</h1>
        </ThemeContainer> 
    </StyledHeader>    
  )
}

export default Header