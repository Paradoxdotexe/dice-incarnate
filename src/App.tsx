import "./App.css";
import { CharacterClassCard } from "./components/CharacterClassCard";

function App() {
  return (
    <CharacterClassCard class={{ name: "Storm Sage", color: "#3799d1" }} />
  );
}

export default App;
