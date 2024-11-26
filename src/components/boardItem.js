// src/components/BoardItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board, notes }) => {
  return (
    <div className="container mt-4">
      <h3>{board.name}</h3>
      <div className="list-group">
        {notes.map(note => (
          <Link key={note.id} to={`/board/${board.id}/note/${note.id}`} className="list-group-item list-group-item-action">
            {note.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoardItem;
