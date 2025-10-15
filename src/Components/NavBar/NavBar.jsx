import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import personajesIcon from '../../assets/personajes.png';
import lugaresIcon from '../../assets/lugares.png';
import episodiosIcon from '../../assets/episodios.png';
import inicioIcon from '../../assets/inicio.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-menu ">
      {/* LOGO o botón de menú */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>

      {/* Enlaces del menú */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''} animate__animated animate__fadeInUp`} >
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={inicioIcon} alt="" /> Inicio
          </Link>
        </li>
        <li>
          <Link to="/personajes" onClick={() => setMenuOpen(false)}>
            <img src={personajesIcon} alt="" /> Personajes
          </Link>
        </li>
        <li>
          <Link to="/lugares" onClick={() => setMenuOpen(false)}>
            <img src={lugaresIcon} alt="" /> Lugares
          </Link>
        </li>
        <li>
          <Link to="/episodios" onClick={() => setMenuOpen(false)}>
            <img src={episodiosIcon} alt="" /> Episodios
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
