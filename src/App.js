import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';  
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import NoteState from './context/notes/NoteState';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
  return (
    <>
     <NoteState>
      <Router>
        <Navbar />
        <Alert message="Your notes are end-to-end encrypted"  />
        <div className="container ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
