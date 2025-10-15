import React from 'react'
import './CardsLugares.css'

const CardsLugares = ({data}) => {
  return (
    <div className="card card-lugar animate__animated animate__flipInX" style={{ width: '18rem' }}>
      <img
        src={`https://cdn.thesimpsonsapi.com/500/location/${data.id}.webp`}
        className="card-img-top"
        alt={data.name}
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">Pueblo: {data.town}</p>
        <p className="card-text">Uso: {data.use}</p>
      </div>
    </div>

  )
}

export default CardsLugares
