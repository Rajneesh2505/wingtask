// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/authtentication';  // Import AuthProvider
import BoardList from './components/boardList';
import BoardItem from './components/boardItem';
// import NoteList from './components/noteList';
import NoteEditor from './components/noteEditor';
import NavBar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import SearchBar from './components/search';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/board/:boardId" element={<BoardItem />} />
          <Route path="/note/:noteId" element={<NoteEditor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
