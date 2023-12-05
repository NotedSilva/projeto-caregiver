import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../routes/Home';
import SobreNos from '../../routes/Sobre';
import Servicos from '../../routes/Servicos';
import Contato from '../../routes/Contato';
import Conectar from '../../routes/Conectar';
import NossosCuidadores from '../../routes/NossosCuidadores';
import Cuidador from '../../routes/Cuidador';
import Agradecimento from '../../routes/Agradecimento';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
      <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/conectar" element={<Conectar />} />
          <Route path="/nossoscuidadores" element={<NossosCuidadores />} />
          <Route path="/cuidador" element={<Cuidador />} />
          <Route path="/agradecimento" element={<Agradecimento />} />
        </Routes>
        </AnimatePresence>
      </>
    );
  }
  
  export default AnimatedRoutes;
