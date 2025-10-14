import React from 'react'
import './ModalPersonaje.css'
import cerrarIcon from '../../assets/cerrar.png'

const ModalPersonaje = ({ personaje, onClose }) => {
    if (!personaje) return null;
    return (
        <div className="modal-personaje" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="primeraParte">
                    <button className="close-btn" onClick={onClose}>
                        <img src={cerrarIcon} alt="Cerrar" />
                    </button>

                    <img
                        src={`https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp`}
                        className="img-modal"
                        alt={personaje.name}
                    />
                    <h2>{personaje.name}</h2>
                    <p><strong>Ocupación:</strong> {personaje.occupation}</p>
                    <p><strong>Estado:</strong> {personaje.status}</p>

                </div>
                <div className="segundaParte">
                    <p><strong>Frases célebres:</strong></p>
                    <div className="frases-box">
                        {Array.isArray(personaje.phrases)
                            ? personaje.phrases.map((f, i) => <p key={i}>• {f}</p>)
                            : <p>{personaje.phrases}</p>}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ModalPersonaje
