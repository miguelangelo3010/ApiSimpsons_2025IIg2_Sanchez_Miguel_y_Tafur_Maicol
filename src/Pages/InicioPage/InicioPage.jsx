
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardsPersonajes from '../../Components/CardsPersonajes/CardsPersonajes';
import CardsEpisodios from '../../Components/CardsEpisodios/CardsEpisodios';
import CardsLugares from '../../Components/CardsLugares/CardsLugares';
import './InicioPage.css';

const InicioPage = () => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let ignore = false;
    const get = (url) => fetch(url).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status} – ${url}`);
      return r.json();
    });

    Promise.all([
      get('https://thesimpsonsapi.com/api/characters?page=1'),
      get('https://thesimpsonsapi.com/api/episodes?page=1'),
      get('https://thesimpsonsapi.com/api/locations?page=1'),
    ])
      .then(([ch, ep, lo]) => {
        if (ignore) return;
        setCharacters(ch?.results?.slice(0, 3) || []);
        setEpisodes(ep?.results?.slice(0, 3) || []);
        setLocations(lo?.results?.slice(0, 3) || []);
      })
      .catch(e => setErr(e.message))
      .finally(() => { if (!ignore) setLoading(false); });

    return () => { ignore = true; };
  }, []);

  return (
    <div className="inicio-page">
      <div className="inicio-hero animate__animated animate__bounce">
        <h1>Explora The Simpsons</h1>
        <p>Personajes, lugares icónicos y episodios memorables de Los Simpson.</p>
        <div className="hero-actions animate__animated animate__bounceIn">
          <Link to="/personajes" className="btn">Ver Personajes</Link>
          <Link to="/lugares" className="btn">Ver Lugares</Link>
          <Link to="/episodios" className="btn">Ver Episodios</Link>
        </div>
      </div>

      {loading && <div className="inicio-loading">Cargando…</div>}
      {err && <div className="inicio-error">Error: {err}</div>}
 
      <div className="inicio-section">
        <div className="section-head">
          <h2>Personajes destacados</h2>
          <Link to="/personajes" className="link">Ver todos</Link>
        </div>
        <div className="grid">
          {characters.map((c, i) => (
            <CardsPersonajes key={c.id ?? i} data={c} mostrarBoton={false}   />
          ))}
        </div>
      </div>


      <div className="inicio-section">
        <div className="section-head">
          <h2>Lugares destacados</h2>
          <Link to="/lugares" className="link">Ver todos</Link>
        </div>
        <div className="grid">
          {locations.map((l, i) => (
            <CardsLugares key={l.id ?? i} data={l} />
          ))}
        </div>
      </div>

      <div className="inicio-section">
        <div className="section-head">
          <h2>Episodios destacados</h2>
          <Link to="/episodios" className="link">Ver todos</Link>
        </div>
        <div className="grid">
          {episodes.map((e, i) => (
            <CardsEpisodios key={e.id ?? i} data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InicioPage;

