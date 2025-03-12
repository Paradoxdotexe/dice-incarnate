import "./App.css";
import { CharacterClassCard } from "./components/CharacterClassCard";

function App() {
  return (
    <CharacterClassCard
      class={{ name: "Storm Sage", color: "#80C1D7", icon: "StormSage" }}
    />
  );
}

export default App;
