import { useState, useEffect } from 'react';
import CardsEpisodios from '../../Components/CardsEpisodios/CardsEpisodios';
import Pagination from '../../Components/Pagination/Pagination';
import BarraBusquedad from '../../Components/BarraBusquedad/BarraBusquedad';
import './EpisodiosPage.css';
import Loader from '../../Components/Loader/Loader';
import episodiosImg from '../../assets/episodios.jpg';

const EpisodiosPage = () => {
  const [episodios, setEpisodios] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`)
      .then(res => res.json())
      .then(data => {
        if (ignore) return;
        setEpisodios(data.results || []);
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
  const filteredEpisodios = episodios.filter((episodio) =>
    episodio.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='episodios-page'>
      <div className="busquedad">
        <BarraBusquedad onSearchChange={setSearchTerm} />
      </div>
      {loading ? (
        <p>Cargando...</p>
      ) : filteredEpisodios.length > 0 ? (
        <>
          <div className='cards'>
            <div className="info-caja animate__animated animate__fadeInDown">
              <img className='img-personajes' src={episodiosImg} alt="" />
              <p>
                Explora la colección completa de episodios de Los Simpson. <br />
                Aquí podrás consultar información detallada de cada capítulo, incluyendo su nombre, temporada, número y fecha de emisión.
              </p>
            </div>

            {filteredEpisodios.map((episodio, idx) => (
              <CardsEpisodios key={episodio.id ?? episodio.title ?? idx} data={episodio} />
            ))}
            <div className='paginator'>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
              />
            </div>

          </div>




        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EpisodiosPage;

