import React, {useState} from 'react'
import { StyledCounter } from './styles';

const Counter = () => {
  const [counter, setCounter] = useState(0);  
  return (
    <StyledCounter>
        <h1>{counter}</h1>
        <div className='controls'>
            <button onClick={() => setCounter(counter + 1)}>
                Adicionar +
            </button>
            <button onClick={() => setCounter(counter - 1)}>
                Remover -
            </button>
        </div>
    </StyledCounter>
  )
}

export default Counter