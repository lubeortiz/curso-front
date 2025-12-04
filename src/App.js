import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecetasPage from './components/pages/RecetasPage';
import MisRecetasPage from './components/pages/MisRecetasPage';
import NovedadesPage from './components/pages/NovedadesPage';
import ContactoPage from './components/pages/ContactoPage';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between overflow-y-hidden" style={{height: '100vh'}}>
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<RecetasPage/>} />
          <Route path="inicio" element={<RecetasPage/>} />
          <Route path="mis-recetas" element={<MisRecetasPage/>} />
          <Route path="novedades" element={<NovedadesPage/>} />
          <Route path="contacto" element={<ContactoPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
