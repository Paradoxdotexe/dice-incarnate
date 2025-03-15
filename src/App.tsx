import "./App.css";
import { NFlex } from "./common/NFlex";
import { CharacterClassCard } from "./components/CharacterClassCard";

function App() {
  return (
    <NFlex
      vertical
      align="center"
      css={`
        padding: 48px;
      `}
    >
      <div
        css={`
          width: 1000px;
        `}
      >
        <NFlex gap={24}>
          <CharacterClassCard
            class={{ name: "Storm Sage", color: "#3799d1" }}
            classLevel={{ transcendence: 3, ascension: 2 }}
          />
          <CharacterClassCard
            class={{ name: "Blood Barbarian", color: "#d13737" }}
            classLevel={{ transcendence: 1, ascension: 3 }}
          />
        </NFlex>
      </div>
    </NFlex>
  );
}

export default App;
