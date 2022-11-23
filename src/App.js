import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calc from './components/calculator';
import NotFoundPage from './components/ErrorPage';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path="/Home" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
