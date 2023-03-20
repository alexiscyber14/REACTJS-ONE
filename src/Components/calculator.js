import React, { Component } from 'react';
import '../App.css';

export class CalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="parent">
        <div className="child output dark-gray">0</div>
        <button className="child light-gray" type="button">AC</button>
        <button className="child light-gray" type="button">+/-</button>
        <button className="child light-gray" type="button">%</button>
        <button className="child orange" type="button">÷</button>
        <button className="child light-gray" type="button">7</button>
        <button className="child light-gray" type="button">8</button>
        <button className="child light-gray" type="button">9</button>
        <button className="child orange" type="button">x</button>
        <button className="child light-gray" type="button">4</button>
        <button className="child light-gray" type="button">5</button>
        <button className="child light-gray" type="button">6</button>
        <button className="child orange" type="button">-</button>
        <button className="child light-gray" type="button">1</button>
        <button className="child light-gray" type="button">2</button>
        <button className="child light-gray" type="button">3</button>
        <button className="child orange" type="button">+</button>
        <button className="child zero light-gray" type="button">0</button>
        <button className="child light-gray" type="button">.</button>
        <button className="child orange" type="button">=</button>

      </div>
    );
  }
}
export default CalculatorComponent;
