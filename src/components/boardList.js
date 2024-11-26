// src/components/BoardList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BoardList = ({ boards }) => {
  return (
    <div className="container mt-4">
      <h3>Boards</h3>
      <div className="list-group">
        {boards.map(board => (
          <Link key={board.id} to={`/board/${board.id}`} className="list-group-item list-group-item-action">
            {board.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoardList;
