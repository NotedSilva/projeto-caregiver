import img2 from '../assets/2.jpg';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import ContatoForm from '../components/Contato/ctnform/ContatoForm';
import {motion} from 'framer-motion'

function Contato() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    >
        <Navbar />
        <Main
          cName='main-mid'
          MainImg={img2}
          title='Contato'
          btnClass='hide'
        />
        <ContatoForm />
        <Footer />
    </motion.div>
  );
}

export default Contato;
