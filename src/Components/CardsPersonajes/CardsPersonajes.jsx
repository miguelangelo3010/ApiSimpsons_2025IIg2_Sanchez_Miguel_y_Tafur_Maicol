import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardsPersonajes.css'



const CardsPersonajes = ({ data, onVerMas, mostrarBoton = true }) => {
  return (
    <div className="card card-personaje animate__animated animate__flipInX" style={{ width: '18rem' }}>
      <img
        src={`https://cdn.thesimpsonsapi.com/500/character/${data.id}.webp`}
        className="card-img-top"
        alt={data.name}
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text"><strong>Ocupación:</strong> {data.occupation}</p>
        <p className="card-text"><strong>Estado:</strong> {data.status}</p>
        {
          mostrarBoton && (
            <a href="#" className="btn btn-primary btn-vermas" onClick={onVerMas}>
              Ver más
            </a>

          )

        }

      </div>
    </div>


  )
}

export default CardsPersonajes
