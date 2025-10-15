import React from 'react'
import './CardsEpisodios.css'

const CardsEpisodios = ({data}) => {
  return (
        <div className="card card-episodio animate__animated animate__flipInX" style={{ width: '18rem' }}>
        <img
            src={`https://cdn.thesimpsonsapi.com/500/episode/${data.id}.webp`}
            className="card-img-top"
            alt={data.name}
        />
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Temporada: {data.season}</p>
            <p className="card-text">Número de episodio: {data.episode_number}</p>
            <p className="card-text">Fecha de emisión: {data.airdate}</p>
            {/* <a href="#" className="btn btn-primary">
            Ver más
            </a> */}
        </div>
        </div>

  )
}

export default CardsEpisodios
