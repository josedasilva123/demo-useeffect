import React, {useEffect, useState} from 'react'
import { StyledCounter } from './styles';

const Counter = () => {
  const [counter, setCounter] = useState(0);  

  //DESMONTAGEM
  // A função declarada no primeiro parâmetro + a lista de dependências vazia dispara um efeito na montagem
  useEffect(() => {
    // console.log('Ocorreu o efeito de montagem');
    const counterStorage = +localStorage.getItem('EXAMPLE_COUNTER');
    setCounter(counterStorage);
  }, [])

  //ATUALIZAÇÃO
  //Cada vez que um item da lista de dependencias é alterado o efeito dispara
  useEffect(() => {   
    // console.log('O contador foi alterado')
    localStorage.setItem("EXAMPLE_COUNTER", counter);
  }, [counter])
  
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