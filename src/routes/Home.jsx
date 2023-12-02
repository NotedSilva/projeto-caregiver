import Services from '../components/Servicos/Services';
import Depoimento from '../components/depoimento/depoimento'
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Tutorial from '../components/Tutorial/Tutorial';
import Contato from '../components/Contato/Contato';
import React, { Suspense } from 'react';
import Conteudo from '../components/Conteudo/Conteudo';
import img1 from '../assets/1.jpg'


function Home() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
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
      </Suspense>
    </>
  );
}

export default Home;
