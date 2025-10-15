import React from 'react'
import imagen from '../../assets/Homero_pensativo.png'
import './Loader.css'

const Loader = () => {
    return (
        <div className='Loader'>

            <div className="texto">
                <p>No se encontraron elementos con ese nombre.</p>
                <p>Prueba con otro.</p>
            </div>
            <div className="imagen">
                <img className='img-cargando' src={imagen} alt="Cargando..." />

            </div>

        </div>
    )
}

export default Loader
