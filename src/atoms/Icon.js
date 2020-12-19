import React from 'react';

export default function Icon(props) {
  return (
    <span
      className='fish-icon'
      role='img'
      aria-label={props.ariaLabel}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      data-testid='icon'
    >
      {props.type}
    </span>
  );
}
