import Services from '../components/Servicos/Services';
import Depoimento from '../components/depoimento/depoimento'
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Tutorial from '../components/Tutorial/Tutorial';
import Contato from '../components/Contato/Contato';
import Conteudo from '../components/Conteudo/Conteudo';
import img1 from '../assets/1.jpg'
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
        <Navbar/>
        <Main
          cName='main'
          MainImg={img1}
          title='Cuide Bem, Viva Melhor'
          text='Seu Bem-Estar é a Nossa Prioridade'
          buttonText='Conheça Nossos Cuidadores'
          url='/NossosCuidadores'
          btnClass='botao'
        />
        <Tutorial/>
        <Conteudo/>
        <Services/>
        <Depoimento/>
        <Faq/>
        <Contato/>
        <Footer/>
    </motion.div>
  );
}

export default Home;
