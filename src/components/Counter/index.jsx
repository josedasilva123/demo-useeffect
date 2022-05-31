import React, { useState, useEffect } from "react";

import { StyledCounter } from "./styles";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // useEffect de montagem 
  useEffect(() => {
    // Pegando informações do localStorage e convertendo em number por meio da Short Syntax +
    const dataCounter = +localStorage.getItem("EXAMPLE_COUNTER");

    // Verifico se o retorno do localStorage foi válido
    if (dataCounter) {
      //Caso seja válido, insiro o valor do localStorage no state counter
      setCounter(dataCounter);
    }
  }, []);

  // useEffect de atualização 
  useEffect(() => {
    //Cada vez que o counter atualiza, mando o valor para EXAMPLE_COUNTER no localStorage
    localStorage.setItem("EXAMPLE_COUNTER", counter);
    console.log("Ativo efeito");
  }, [counter]);

  return (
    <StyledCounter>
      <h1>{counter}</h1>
      <div className="controls">
        <button onClick={() => setCounter(counter + 1)}>Adicionar +</button>
        <button onClick={() => setCounter(counter - 1)}>Remover -</button>
      </div>
    </StyledCounter>
  );
};

export default Counter;
