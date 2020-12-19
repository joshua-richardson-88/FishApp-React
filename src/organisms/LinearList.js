import React from 'react';

export default function LinearList(props) {
  return (
    <div className='fish-linear-list'>
      {props.children.map((item, key) => (
        <div className='fish-linear-list-item' key={key}>
          {item}
        </div>
      ))}
    </div>
  );
}
