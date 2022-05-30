import "./App.css";
//import Counter from "./components/Counter";
import PokemonList from "./components/PokemonList";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PokemonList />
    </div>
  );
}

export default App;
