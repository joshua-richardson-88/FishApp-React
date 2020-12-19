import React from 'react';
import crabgrassImage from '../../Crabgrass.jpg';
import { PicturePanel } from '../../molecules';
import { LinearList } from '../../organisms';

export default function FishList(props) {
  if (!props.fishes || props.fishes.length === 0) return null;

  return (
    <LinearList>
      {props.fishes.map((fish, key) => (
        <PicturePanel
          key={key}
          name={fish.fishName}
          direction={fish.fishDirection}
          src={crabgrassImage}
        />
      ))}
    </LinearList>
  );
}
