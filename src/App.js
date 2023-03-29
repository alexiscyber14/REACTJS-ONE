import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import CalculatorComponent from './Components/calculator';
import QuoteFetcher from './Components/quote';
import Home from './Components/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorComponent />} />
      <Route path="/quotes" element={<QuoteFetcher />} />
    </Routes>
  </Router>
);

export default App;
