import React from 'react';

export default function CardBody(props) {
  return (
    <div className={props.className}>
      <span>{props.info}</span>
    </div>
  );
}
