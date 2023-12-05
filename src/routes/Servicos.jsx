import React, {Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Conteudo2 from '../components/Servicos/Conteudo2';
import img3 from '../assets/3.jpg'
import {motion} from 'framer-motion'



function Servicos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
        <Navbar/>
        <Main
          cName='main-mid'
          MainImg={img3}
          title='Serviços'
          btnClass='hide'
        />
        <Conteudo2/>
        <Footer/>
    </motion.div>
  );
}

export default Servicos;
