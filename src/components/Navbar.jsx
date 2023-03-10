import React from "react";
import { Link } from "react-router-dom";

function Navbar({ lang, setLang }) {
 
  return (
    <header className="header">
      <div className="logo">
        <h2>Articles Center</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              {lang==="en" ? "Home" : "Ana Sayfa"}
            </Link>
          </li>
          <li>
            <Link to="about" className="link">
              {lang==="en" ? "About" : "Hakkımızda"}
            </Link>
          </li>
        </ul>
        <select
          id="language"
          value={lang}
          onChange={e => setLang(e.target.value)}
          className="multiple--language"
        >
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
      </nav>
    </header>
  );
}

export default Navbar;
