import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className='header'>
      <div className="logo">
        <h2>Articles Center</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className='link'>Home</Link></li>
          <li><Link to="about" className='link'>About</Link></li>
          <li><Link className='link'>Contact</Link></li>
        </ul>
        <select name="" id="" className="multiple--language">
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
      </nav>
    </header>
  )
}

export default Navbar;