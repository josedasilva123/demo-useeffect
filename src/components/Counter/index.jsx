import React, { useState, useEffect } from 'react'
import { StyledCounter } from './styles';

const Counter = () => {
  const [counter, setCounter] = useState(0); 
  
  //Montagem
  useEffect(() => {
    const counterStorage = +localStorage.getItem('EXAMPLE_COUNTER');
    if(counterStorage){
      setCounter(counterStorage);
    }
  }, []);

  //Atualização
  useEffect(() => {
    localStorage.setItem('EXAMPLE_COUNTER', counter);
  }, [counter]);
  // Lista de dependencias vazia ou com um item vazio: MONTAGEM

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