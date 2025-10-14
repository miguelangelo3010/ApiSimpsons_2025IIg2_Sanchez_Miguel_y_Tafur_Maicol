import { useState, useEffect } from 'react';
import CardsEpisodios from '../../Components/CardsEpisodios/CardsEpisodios';
import Pagination from '../../Components/Pagination/Pagination';
import './EpisodiosPage.css';

const EpisodiosPage = () => {
  const [episodios, setEpisodios] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`)
      .then(res => res.json())
      .then(data => {
        if (ignore) return;
        setEpisodios(data.results || []);
        // Total de páginas dinámico (usa "pages" si existe; si no, calcula con "count/20")
        const pages =
          typeof data.pages === 'number'
            ? data.pages
            : data.count
            ? Math.ceil(data.count / 20)
            : 0;
        setTotalPages(pages || 1);
      })
      .catch(err => {
        console.error('Error:', err);
        setEpisodios([]);
        setTotalPages(1);
      })
      .finally(() => !ignore && setLoading(false));

    return () => { ignore = true; };
  }, [page]);

  const handleChange = (_event, value) => setPage(value);

  return (
    <div className='episodios-page'>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className='cards'>
            {episodios.map((episodio, idx) => (
              <CardsEpisodios key={episodio.id ?? episodio.title ?? idx} data={episodio} />
            ))}
          </div>

          <div className='paginator'>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EpisodiosPage;

