
import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = ({ notes }) => {
  return (
    <div className="container mt-4">
      <h4>Notes</h4>
      <div className="list-group">
        {notes.map(note => (
          <Link key={note.id} to={`/note/${note.id}`} className="list-group-item list-group-item-action">
            {note.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
