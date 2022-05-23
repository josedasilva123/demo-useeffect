import "./App.css";
import Counter from "./components/Counter";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Counter />
    </div>
  );
}

export default App;
