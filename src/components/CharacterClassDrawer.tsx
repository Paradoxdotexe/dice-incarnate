import { opacify } from 'polished';
import { NFlex } from '../common/NFlex';
import { NDrawer } from '../common/NDrawer';
import { NButton } from '../common/NButton';
import { CharacterClassState } from '../database/collections/Character';
import { CharacterClassDocument } from '../database/collections/CharacterClass';
import { CharacterClassFeatureCard } from './CharacterClassFeatureCard';
import { CharacterClassFeatureDocument } from '../database/collections/CharacterClassFeature';
import { groupBy, keyBy } from 'lodash-es';
import { Header } from './Header';
import { CHARACTER_ATTRIBUTES } from '../appendix/CharacterAttribute';

const PANEL_WIDTH = 600;

const ATTRIBUTE_BY_KEY = keyBy(CHARACTER_ATTRIBUTES, 'key');

type CharacterClassDrawerProps = {
  open: boolean;
  onClose: () => void;
  class: CharacterClassDocument;
  classState?: CharacterClassState;
  onClick?: () => void;
  onAdd: (featureKey: string) => void;
  onRemove: (featureKey: string) => void;
  acquireDisabled?: boolean;
  onAscend: () => void;
  onDescend: () => void;
  ascendDisabled?: boolean;
};

export const CharacterClassDrawer: React.FC<CharacterClassDrawerProps> = (props) => {
  const color = props.class.color;

  const ascension = props.classState?.ascension ?? 1;
  const maxAscension = props.class.type === 'ARMOR' ? 5 : 3;
  const isMaxAscension = ascension === maxAscension;

  let featureAreas: { [area: string]: CharacterClassFeatureDocument[] } = {};
  if (props.class.type === 'CLASS') {
    featureAreas = groupBy(props.class.features, (feature) =>
      !!feature.getMana() ? 'ABILITIES' : 'PERKS'
    );
  } else if (props.class.type === 'PERK') {
    const attributeName = ATTRIBUTE_BY_KEY[props.class.attributeKey!].name;
    featureAreas = groupBy(
      props.class.features,
      (feature) => `${attributeName.toUpperCase()} ${feature.attributeRequirement} PERKS`
    );
  } else if (props.class.type === 'WEAPON' || props.class.type === 'ARMOR') {
    featureAreas = groupBy(props.class.features, (feature) => feature.getRuneType() ?? '');
  } else {
    featureAreas = { '': props.class.features };
  }

  return (
    <NDrawer open={props.open} onClose={props.onClose} width={PANEL_WIDTH}>
      <NFlex
        vertical
        gap={24}
        style={{
          background: opacify(-0.97, color),
          borderLeft: `2px solid ${color}`,
          height: '100%',
          padding: 24,
          overflowY: 'auto',
        }}
      >
        <NFlex justify="space-between">
          <NFlex vertical gap={12}>
            <div
              style={{
                fontFamily: 'Grenze',
                fontSize: 32,
                color: 'white',
                fontWeight: 500,
              }}
            >
              {props.class.getName(props.classState)}
            </div>
            <div
              style={{
                fontSize: 15,
                color: 'white',
                whiteSpace: 'nowrap',
              }}
            >
              {props.class.description}
            </div>
          </NFlex>

          <NFlex gap={6}>
            {ascension > 1 && (
              <NButton type="outline" onClick={props.onDescend}>
                Unsurge
              </NButton>
            )}
            {props.class.ascendable && (
              <NButton
                color={opacify(-0.25, color)}
                onClick={props.onAscend}
                disabled={
                  isMaxAscension || props.ascendDisabled || !props.classState?.featureKeys.length
                }
              >
                {isMaxAscension ? 'Max Level' : 'Surge'}
              </NButton>
            )}
          </NFlex>
        </NFlex>

        <NFlex vertical gap={18}>
          {Object.entries(featureAreas).map(([area, features]) => (
            <NFlex vertical gap={12}>
              {area && <Header align="left">{area}</Header>}
              {features.map((feature) => {
                const isAcquired = props.classState?.featureKeys.includes(feature.key) ?? false;
                const isAcquirable = !isAcquired && !props.acquireDisabled;
                return (
                  <CharacterClassFeatureCard
                    key={feature.key}
                    class={props.class}
                    classState={props.classState}
                    feature={feature}
                    isAcquired={isAcquired}
                    isAcquirable={isAcquirable}
                    onAdd={() => props.onAdd(feature.key)}
                    onRemove={() => props.onRemove(feature.key)}
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
