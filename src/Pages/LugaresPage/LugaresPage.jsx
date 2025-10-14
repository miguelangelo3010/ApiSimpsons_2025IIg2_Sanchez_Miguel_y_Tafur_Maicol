import { useState, useEffect } from 'react';
import CardsLugares from '../../Components/CardsLugares/CardsLugares.jsx';
import Pagination from '../../Components/Pagination/Pagination';
import './LugaresPage.css';

const LugaresPage = () => {
  const [lugares, setLugares] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
      .then(res => res.json())
      .then(data => {
        if (ignore) return;
        setLugares(data.results || []);
        // intenta usar pages de la API; si no, calcula con count/20
        const pages =
          typeof data.pages === 'number'
            ? data.pages
            : data.count
            ? Math.ceil(data.count / 20)
            : 0;
        setTotalPages(pages);
      })
      .catch(err => {
        console.error('Error:', err);
        setLugares([]);
      })
      .finally(() => !ignore && setLoading(false));

    return () => { ignore = true; };
  }, [page]);

  const handleChange = (_event, value) => setPage(value);

  return (
    <div className='lugares-page'>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className='cards'>
            {lugares.map((lugar, idx) => (
              <CardsLugares key={lugar.id ?? lugar.name ?? idx} data={lugar} />
            ))}
          </div>

          <div className='paginator'>
            <Pagination
              count={totalPages || 1}
              page={page}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LugaresPage;
