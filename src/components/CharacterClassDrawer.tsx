import { opacify } from "polished";
import { NFlex } from "../common/NFlex";
import { NDrawer } from "../common/NDrawer";
import { NButton } from "../common/NButton";
import { CharacterClassState } from "../database/collections/Character";
import { CharacterClassDocument } from "../database/collections/CharacterClass";
import { CharacterClassFeatureCard } from "./CharacterClassFeatureCard";
import { CharacterClassFeatureDocument } from "../database/collections/CharacterClassFeature";
import { groupBy } from "lodash-es";
import { Header } from "./Header";

const PANEL_WIDTH = 600;

type CharacterClassDrawerProps = {
  open: boolean;
  onClose: () => void;
  class: CharacterClassDocument;
  classState?: CharacterClassState;
  onClick?: () => void;
  onAcquire: (traitKey: string) => void;
  acquireDisabled?: boolean;
  onAscend?: () => void;
  ascendDisabled?: boolean;
};

export const CharacterClassDrawer: React.FC<CharacterClassDrawerProps> = (
  props
) => {
  const color = props.class.color;

  const ascension = props.classState?.ascension ?? 1;
  const maxAscension = props.class.type === "CLASS" ? 3 : 5;
  const isMaxAscension = ascension === maxAscension;

  let featureAreas: { [area: string]: CharacterClassFeatureDocument[] } = {};
  if (props.class.type === "CLASS") {
    featureAreas = groupBy(props.class.features, (feature) =>
      !!feature.getMana() ? "ABILITIES" : "PERKS"
    );
  } else if (props.class.type === "PERK") {
    featureAreas = groupBy(
      props.class.features,
      (feature) =>
        `${props.class.attributeKey} ${feature.attributeRequirement} PERKS`
    );
  } else {
    featureAreas = { "": props.class.features };
  }

  return (
    <NDrawer open={props.open} onClose={props.onClose} width={PANEL_WIDTH}>
      <NFlex
        vertical
        gap={24}
        style={{
          background: opacify(-0.97, color),
          borderLeft: `2px solid ${color}`,
          height: "100%",
          padding: 24,
          overflowY: "auto",
        }}
      >
        <NFlex justify="space-between" align="center">
          <div
            style={{
              fontFamily: "Grenze",
              fontSize: 32,
              color: "white",
              fontWeight: 500,
            }}
          >
            {props.class.name}{" "}
            {props.classState &&
              props.class.ascendable &&
              ["I", "II", "III", "IV", "V"][ascension - 1]}
          </div>

          {props.class.ascendable && (
            <NButton
              color={color}
              onClick={props.onAscend}
              disabled={isMaxAscension || props.ascendDisabled}
            >
              {isMaxAscension ? "Max Ascension" : "Ascend"}
            </NButton>
          )}
        </NFlex>

        <NFlex vertical gap={18}>
          {Object.entries(featureAreas).map(([areaLabel, features]) => (
            <NFlex vertical gap={12}>
              <Header align="left">{areaLabel}</Header>
              {features.map((feature) => {
                const isAcquired =
                  props.classState?.featureKeys.includes(feature.key) ?? false;
                const isAcquirable = !isAcquired && !props.acquireDisabled;
                return (
                  <CharacterClassFeatureCard
                    key={feature.key}
                    class={props.class}
                    feature={feature}
                    isAcquired={isAcquired}
                    isAcquirable={isAcquirable}
                    onClick={() => props.onAcquire(feature.key)}
                    ascension={ascension}
                  />
                );
              })}
            </NFlex>
          ))}
        </NFlex>
      </NFlex>
    </NDrawer>
  );
};
