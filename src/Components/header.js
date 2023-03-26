import React from 'react';
import '../App.scss';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <a href="/" className="routing">Home</a>
      <a href="/calculator" className="routing">Calculator</a>
      <a href="/quotes" className="routing">Quotes</a>
    </nav>
  </header>

);
export default Header;
