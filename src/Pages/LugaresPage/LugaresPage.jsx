import { useState, useEffect } from 'react';
import CardsLugares from '../../Components/CardsLugares/CardsLugares.jsx';
import Pagination from '../../Components/Pagination/Pagination';
import BarraBusquedad from '../../Components/BarraBusquedad/BarraBusquedad';
import lugaresImg from '../../assets/lugares.jpg';
import Loader from '../../Components/Loader/Loader';
import './LugaresPage.css';

const LugaresPage = () => {
  const [lugares, setLugares] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
      .then(res => res.json())
      .then(data => {
        if (ignore) return;
        setLugares(data.results || []);
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

  const filteredLugares = lugares.filter((lugar) =>
    lugar.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (_event, value) => setPage(value);

  return (
    <div className='lugares-page'>
      {/* Barra de búsqueda */}
      <div className="busquedad">
        <BarraBusquedad onSearchChange={setSearchTerm} />
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : filteredLugares.length > 0 ? (
        <>
          <div className='cards'>
            <div className="info-caja animate__animated animate__fadeInDown">
              <img className='img-personajes' src={lugaresImg} alt="" />
              <p>
                Explora los lugares más icónicos de Los Simpson, desde el bullicioso centro de Springfield hasta los rincones más curiosos de la ciudad. <br />
                Aquí podrás descubrir los escenarios donde se desarrollan las historias más memorables de la familia amarilla: sus edificios, establecimientos y espacios emblemáticos.
              </p>
            </div>

            {filteredLugares.map((lugar, idx) => (
              <CardsLugares key={lugar.id ?? lugar.name ?? idx} data={lugar} />
            ))}
            <div className='paginator'>
              <Pagination
                count={totalPages || 1}
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

export default LugaresPage;
