import React from 'react';
import '../App.css';
import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <a href="/"><Link to="/">Home</Link></a>
      <a href="/calculator"><Link to="/calculator">Calculator</Link></a>
      <a href="/quotes"><Link to="/quotes">Quotes</Link></a>
    </nav>
  </header>
);
export default Header;
