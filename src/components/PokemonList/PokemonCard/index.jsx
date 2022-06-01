import React from 'react'
import { StyledCard } from './styles'

const PokemonCard = ({name, onClick}) => {
  return (
    <StyledCard onClick={onClick}>
        <h3>{name}</h3>
    </StyledCard>        
  )
}

export default PokemonCard