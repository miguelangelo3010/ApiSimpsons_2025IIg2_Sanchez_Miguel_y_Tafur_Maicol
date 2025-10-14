import React from 'react'
import './Header.css'
import logo from '../../assets/Homero.png'
import simsopms from '../../assets/The_Simpsons.png'

const Header = () => {
  return (
    <header>
        <img className='logo' src={logo} alt="Logo de Homero Simpson" />
        <img className='simsopms' src={simsopms} alt="Logo de Los Simpsons" />
      
    </header>
  )
}

export default Header
