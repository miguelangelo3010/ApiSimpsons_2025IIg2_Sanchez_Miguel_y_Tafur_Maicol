import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardsPersonajes.css'


 
const CardsPersonajes = ({data, onVerMas}) => {
  return (
    <div className="card card-personaje" style={{ width: '18rem' }}>
      <img
        src={`https://cdn.thesimpsonsapi.com/500/character/${data.id}.webp`}
        className="card-img-top"
        alt={data.name}
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">Ocupación: {data.occupation}</p>
        <p className="card-text">Estado: {data.status}</p>
        <a href="#" className="btn btn-primary btn-vermas" onClick={onVerMas}>
          Ver más
        </a>
      </div>
    </div>

    
  )
}

export default CardsPersonajes
