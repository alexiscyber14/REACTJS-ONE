import './App.css';
import React from 'react';
import CalculatorComponent from './Components/calculator';
import QuoteFetcher from './Components/quotes';

const App = () => (
  <div className="App">
    <div className="quoter">
      <QuoteFetcher />
    </div>
    <div className="calculateContainer">
      <CalculatorComponent />
    </div>
  </div>
);

export default App;
