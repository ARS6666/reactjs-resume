import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainENG from './Components/MainENG';
import MainPER from './Components/MainPER';

const App = () => {

  return (
    <>
      <Router>
          <Routes>
            <Route path='/ENG' element={<MainENG />} />
            <Route path='/PER' element={<MainPER />} />
          </Routes>
      </Router>
    </>
  );
};


export default App;