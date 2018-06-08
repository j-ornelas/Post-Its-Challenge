import React from 'react';

export default function CardTitle(props) {
  return (
    <div className='section'>
    <div className={props.className}>
      <span className='title'>{props.info}</span>
      <span className='buttons'>{'buttons here'}</span>
    </div>
    </div>
  );
}
