import React from 'react';

export default function Button(props) {
  return (
    <button className='fish-button' onClick={props.action} data-testid='button'>
      {props.children}
    </button>
  );
}
