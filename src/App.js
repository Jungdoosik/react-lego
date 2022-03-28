import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import App10 from './App10';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="movie/:id" element={<Detail />} />
        <Route path="/" element={<App10 />} />
      </Routes>
    </Router>

  );
}

export default App;