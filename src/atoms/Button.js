import React from 'react';

export default function Button(props) {
  return (
    <button className='fish-button' onClick={props.action}>
      {props.children}
    </button>
  );
}
