import React from 'react';
import { Card } from 'react-bootstrap';

const Note = ({ note }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Note;
