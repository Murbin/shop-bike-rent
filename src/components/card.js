import React from 'react';
import Card from 'react-bootstrap/Card';

const CardCustom = (props) => {
  const { title, content, updated } = props.card;

  return (
    <Card>
      <Card.Header>{updated}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
