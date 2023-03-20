import './App.css';
import React from 'react';
import { CalculatorComponent } from './Components/calculator';

class App extends React.Component {
  styles={

  };

  render() {
    return (
      <div className="App">
        <CalculatorComponent />
      </div>
    );
  }
}

export default App;
