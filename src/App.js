import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
    <Navigation />

    <main>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
        </Route> 
    </Routes>
    </main>
    

    </div>
  )
}

export default App;
