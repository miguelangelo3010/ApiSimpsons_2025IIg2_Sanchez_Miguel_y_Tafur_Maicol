import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} <strong>The Simpsons App</strong></p>
        <p>Desarrollado por <span className="footer-names">Miguel Sánchez</span> & <span className="footer-names">Maicol Tafur</span></p>
      </div>
    </footer>
  );
};

export default Footer;
