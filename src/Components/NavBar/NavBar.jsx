import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import personajesIcon from '../../assets/personajes.png'
import lugaresIcon from '../../assets/lugares.png'
import episodiosIcon from '../../assets/episodios.png'
import inicioIcon from '../../assets/inicio.png'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/"> <img className="inicio-icon" src={inicioIcon} alt="" aria-hidden="true" /> Inicio</Link></li>
            <li><Link to="/personajes"> <img className="personaje-icon" src={personajesIcon} alt="" aria-hidden="true" /> Personajes</Link></li>
            <li><Link to="/lugares"> <img className="lugares-icon" src={lugaresIcon} alt="" aria-hidden="true" /> Lugares</Link></li>
            <li><Link to="/episodios"> <img className="episodios-icon" src={episodiosIcon} alt="" aria-hidden="true" /> Episodios</Link></li>
        </ul>
      
    </nav>
  )
}

export default NavBar
