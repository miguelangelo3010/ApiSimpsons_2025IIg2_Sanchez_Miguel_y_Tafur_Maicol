import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PersonajesPage from './Pages/PersonajesPage/PersonajesPage';
import EpisodiosPage from './Pages/EpisodiosPage/EpisodiosPage';
import LugaresPage from './Pages/LugaresPage/LugaresPage';
import Footer from './Components/Footer/Footer';
import InicioPage from './Pages/InicioPage/InicioPage';

function App() {

  return (
    <>
    <Router>

    
      <Header />
      <NavBar />
      <div className="container-pages">
        
          <Routes>        
            <Route path='/personajes' element={<PersonajesPage />} />
            <Route path='/lugares' element={<LugaresPage />} />
            <Route path='/episodios' element={<EpisodiosPage />} />
            <Route path='/*' element={<InicioPage />} />
          </Routes>

      </div>
      <Footer />
      </Router>
    </>
  )
}

export default App
