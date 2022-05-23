import React from 'react'
import { StyledCard } from './styles'

const PokemonCard = ({name}) => {
  return (
    <StyledCard>
        <h3>{name}</h3>
    </StyledCard>        
  )
}

export default PokemonCard