
import img1 from '../assets/1.jpg';


import React, { lazy, Suspense } from 'react';
import Contato from '../components/Contato/Contato';

// Importe os componentes usando React.lazy
const LazyNavbar = lazy(() => import('../components/Navbar/Navbar'));
const LazyMain = lazy(() => import('../components/Main/Main'));
const LazyFooter = lazy(() => import('../components/Footer/Footer'));
const LazyTutorial = lazy(() => import('../components/Tutorial/Tutorial'));
const LazyServices = lazy(() => import('../components/Servicos/Services'));
const LazyDepoimento = lazy(() => import('../components/depoimento/depoimento'));
const LazyGaleria = lazy(() => import('../components/Galeria/Galeria'));
const LazyFaq = lazy(() => import('../components/Faq/Faq'));

function Home() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <LazyNavbar />
        <LazyMain
          cName='main'
          MainImg={img1}
          title='Cuide Bem, Viva Melhor'
          text='Seu Bem-Estar é a Nossa Prioridade'
          buttonText='Conheça Nossos Cuidadores'
          url='/NossosCuidadores'
          btnClass='botao'
        />
        <LazyTutorial />
        <LazyServices />
        <LazyGaleria />
        <LazyDepoimento />
        <LazyFaq />
        <Contato />
        <LazyFooter />
        </Suspense>
    </>
  );
}

export default React.memo(Home);


