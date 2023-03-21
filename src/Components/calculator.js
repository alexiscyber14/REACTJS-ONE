import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

const CalculatorComponent = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="parent">
      <div className="child output dark-gray">{state.next || state.total || '0'}</div>
      <button className="child light-gray" type="button" onClick={() => handleClick('AC')}>AC</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('+/-')}>+/-</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('%')}>%</button>
      <button className="child orange" type="button" onClick={() => handleClick('÷')}>÷</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('7')}>7</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('8')}>8</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('9')}>9</button>
      <button className="child orange" type="button" onClick={() => handleClick('x')}>x</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('4')}>4</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('5')}>5</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('6')}>6</button>
      <button className="child orange" type="button" onClick={() => handleClick('-')}>-</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('1')}>1</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('2')}>2</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('3')}>3</button>
      <button className="child orange" type="button" onClick={() => handleClick('+')}>+</button>
      <button className="child zero light-gray" type="button" onClick={() => handleClick('0')}>0</button>
      <button className="child light-gray" type="button" onClick={() => handleClick('.')}>.</button>
      <button className="child orange" type="button" onClick={() => handleClick('=')}>=</button>
    </div>
  );
};
export default CalculatorComponent;
