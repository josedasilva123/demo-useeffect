import "./App.css";

import { useState } from "react";
import Counter from "./components/Counter";
//import PokemonList from "./components/PokemonList";
import { FlexRow, GlobalStyle, ThemeButton } from "./styles/globals";
import Modal from "./components/Modal";

function App() {
  //estado boleano que por meio da condicional desencadea o ciclo de montagem e desmontagem
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />

      <FlexRow justifyContent="center">
        <ThemeButton color="blue" onClick={() => setModal(!modal)}>
          Abrir Modal
        </ThemeButton>
      </FlexRow>

      {/* Renderização Condicional */}
      {modal && (
        <>
          {/* setModal é passado como props */}
          <Modal setModal={setModal}>
            <Counter />
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
