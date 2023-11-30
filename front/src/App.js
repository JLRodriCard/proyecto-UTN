
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Iniciopage from './pages/Iniciopage';
import Serviciospage from './pages/Serviciospage';
import Equipospages from './pages/Equipospage';
import Cotizadorpage from './pages/Cotizadorpage';
import Nosotrospage from './pages/Nosotrospage';

function App() {
  return (
    <div className="App">

      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Iniciopage />} />
          <Route path="Servicios" element={<Serviciospage />} />
          <Route path="Equipos" element={<Equipospages />} />
          <Route path="Cotizador" element={<Cotizadorpage />} />
          <Route path="Nosotros" element={<Nosotrospage />} />

        </Routes>

      </BrowserRouter>
      

      <Footer />


      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >

      </a>
    </div>
  );
}

export default App;
