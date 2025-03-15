import { useEffect, useState } from "react";
import "./App.css";
import { NFlex } from "./common/NFlex";
import { CharacterClassCard } from "./components/CharacterClassCard";
import { CharacterAbilityScore } from "./components/CharacterAbilityScore";

function App() {
  const [stormSageAcquired, setStormSageAcquired] = useState(0);
  const [stormSageAscension, setStormSageAscension] = useState(0);
  const [strongAcquired, setStrongAcquired] = useState(0);

  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      event?.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

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
              10 + strongAcquired + stormSageAcquired + stormSageAscension * 2
            }
          />
          <CharacterClassCard
            class={{ name: "Intelligent", color: "#5F5F5F" }}
            acquired={strongAcquired}
            maxAcquired={6}
            ascension={0}
            maxAscension={0}
            onAcquire={(change) => setStrongAcquired(strongAcquired + change)}
          />
          <CharacterClassCard
            class={{ name: "Storm Sage", color: "#3799d1" }}
            acquired={stormSageAcquired}
            maxAcquired={3}
            ascension={stormSageAscension}
            maxAscension={2}
            onAcquire={(change) =>
              setStormSageAcquired(stormSageAcquired + change)
            }
            onAscend={(change) =>
              setStormSageAscension(stormSageAscension + change)
            }
          />
        </NFlex>
      </div>
    </NFlex>
  );
}

export default App;
