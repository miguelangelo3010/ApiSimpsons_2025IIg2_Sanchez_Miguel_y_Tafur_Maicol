import { useState, useEffect } from 'react';
import { motion } from "motion/react"
import CardsPersonajes from '../../Components/CardsPersonajes/CardsPersonajes';
import Pagination from '../../Components/Pagination/Pagination';
import ModalPersonaje from '../../Components/ModalPersonaje/ModalPersonaje';
import BarraBusquedad from '../../Components/BarraBusquedad/BarraBusquedad';
import Loader from '../../Components/Loader/Loader';
import personajesImg from '../../assets/personajes.webp';

import './PersonajesPage.css';

const PersonajesPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  const totalPages = 60;

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
      .then(res => res.json())
      .then(data => setCharacters(data.results || []))
      .catch(err => console.error('Error:', err));
  }, [page]);

  const handleChange = (_event, value) => setPage(value);
  const handleOpenModal = (character) => setSelectedCharacter(character);
  const handleCloseModal = () => setSelectedCharacter(null);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div className="personajes-page">
      {/* Barra de búsqueda */}
      <div className="busquedad">
        <BarraBusquedad onSearchChange={setSearchTerm} />
      </div>


      {filteredCharacters.length > 0 ? (
        <>
          <div className="cards">
            <div className="info-caja animate__animated animate__fadeInDown">
              <img className='img-personajes animate__animated animate__bounceIn' src={personajesImg} alt="" />
              <p>
                Explora a los habitantes más icónicos de Springfield. Aquí podrás ver su
                ocupación, estado actual y algunas de sus frases más recordadas.
                <br />
                Usa el buscador para encontrar a tu personaje favorito.
              </p>

            </div>
            {filteredCharacters.map((character) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CardsPersonajes
                  key={character.id}
                  data={character}
                  onVerMas={() => handleOpenModal(character)}

                />
              </motion.div>
            ))}
            <div className="paginator">
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
              />
            </div>
          </div>



          <ModalPersonaje personaje={selectedCharacter} onClose={handleCloseModal} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PersonajesPage;
