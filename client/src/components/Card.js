import React from 'react';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import Tag from './Tag';

export default function Card(props) {
  const { title, body, tag } = props.note;
  const tagBackground = `card-tag ${tag}`;

  return (
    <div className='card'>
      <Tag className={tagBackground} info={tag} />
      <span className='card-title'>
        <CardTitle info={title} />
      </span>
      <CardBody className='card-body' info={body} />
    </div>
  );
}
