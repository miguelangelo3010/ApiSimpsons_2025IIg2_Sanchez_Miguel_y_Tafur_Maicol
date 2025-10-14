import React from 'react';
import './BarraBusquedad.css';

const BarraBusquedad = ({onSearchChange}) => {
    const handleInputChange = (e) => {
        onSearchChange(e.target.value); 
  };
  return (
    <nav className="navbar justify-content-center p-3 navbar-busquedad">
      <form className="form-inline d-flex busqueda-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar personaje..."
          aria-label="Buscar"
          onChange={handleInputChange}
        />
      </form>
    </nav>
  );
};

export default BarraBusquedad;

