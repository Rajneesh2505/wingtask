import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './note';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Board = ({ match }) => {
  const [notes, setNotes] = useState([]);
  const { boardId } = match.params;  // Access boardId from URL

  useEffect(() => {
    axios.get(`/api/boards/${boardId}/notes`)
      .then(response => setNotes(response.data))
      .catch(error => console.error(error));
  }, [boardId]);

  return (
    <Container>
      <h2 className="my-4">Board {boardId}</h2>
      <Row>
        {notes.map(note => (
          <Col md={4} key={note.id} className="mb-4">
            <Note note={note} />
          </Col>
        ))}
      </Row>
      <Button variant="success">Add Note</Button>
    </Container>
  );
};

export default Board;
