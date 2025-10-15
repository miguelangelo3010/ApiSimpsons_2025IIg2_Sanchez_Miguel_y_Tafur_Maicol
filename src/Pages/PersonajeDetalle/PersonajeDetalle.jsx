import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PersonajeDetalle.css';

const PersonajeDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personaje, setPersonaje] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonaje = async () => {
      try {

        let found = null;
        let page = 1;

        while (!found && page <= 60) { 
          const res = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
          const data = await res.json();

          found = data.results.find(p => String(p.id) === String(id));
          if (found) {
            setPersonaje(found);
            break;
          }
          page++;
        }

        if (!found) setError('Personaje no encontrado.');
      } catch (err) {
        console.error('Error al obtener el personaje:', err);
        setError('Hubo un problema al cargar el personaje.');
      } finally {
        setLoading(false);
      }
    };

    fetchPersonaje();
  }, [id]);

  if (loading) return <p className="detalle-loading">Cargando personaje...</p>;
  if (error) return <p className="detalle-error">{error}</p>;

  return (
    <div className="personaje-detalle">

      <button className="btn-volver" onClick={() => navigate('/personajes')}>
        Regresar
      </button>

      <div className="detalle-contenido">
        <div className="informacion-primero">
                    <img
          src={`https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp`}
          alt={personaje.name}
          className="detalle-img"
        />
        <h2>{personaje.name}</h2>
        <p><strong>Ocupación:</strong> {personaje.occupation}</p>
        <p><strong>Estado:</strong> {personaje.status}</p>

        </div>



        <div className="frases-box">
        <h3>Frases célebres:</h3>
        {Array.isArray(personaje.phrases) && personaje.phrases.length > 0 ? (
            personaje.phrases.map((f, i) => <p key={i}>“{f}”</p>)
        ) : (
            <p>No hay frases disponibles para este personaje.</p>
        )}
        </div>

      </div>
    </div>
  );
};

export default PersonajeDetalle;
