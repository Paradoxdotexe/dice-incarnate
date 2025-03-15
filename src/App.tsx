import { useState } from "react";
import "./App.css";
import { NFlex } from "./common/NFlex";
import {
  Ascension,
  CharacterClassCard,
  CharacterClassLevel,
  Transcendence,
} from "./components/CharacterClassCard";
import { CharacterAbilityScore } from "./components/CharacterAbilityScore";

function App() {
  const [sageClassLevel, setSageClassLevel] = useState<CharacterClassLevel>({
    transcendence: 0,
    ascension: 0,
  });

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
          <CharacterAbilityScore
            name="Intelligence"
            score={
              10 + sageClassLevel.transcendence + sageClassLevel.ascension * 2
            }
          />
          <CharacterClassCard
            class={{ name: "Storm Sage", color: "#3799d1" }}
            classLevel={sageClassLevel}
            onTranscend={(increment) => {
              const newTranscendence = (sageClassLevel.transcendence +
                increment) as Transcendence;
              setSageClassLevel({
                ...sageClassLevel,
                transcendence: newTranscendence,
                ascension:
                  newTranscendence === 0 ? 0 : sageClassLevel.ascension,
              });
            }}
            onAscend={(increment) => {
              const newAscension = (sageClassLevel.ascension +
                increment) as Ascension;
              setSageClassLevel({
                ...sageClassLevel,
                ascension: newAscension,
              });
            }}
            ascendDisabled={sageClassLevel.transcendence === 0}
          />
        </NFlex>
      </div>
    </NFlex>
  );
}

export default App;
