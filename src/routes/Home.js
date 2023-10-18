
import img1 from '../assets/1.jpg';


import React, { lazy, Suspense } from 'react';

// Importe os componentes usando React.lazy
const LazyNavbar = lazy(() => import('../components/Navbar/Navbar'));
const LazyMain = lazy(() => import('../components/Main/Main'));
const LazyFooter = lazy(() => import('../components/Footer/Footer'));
const LazyTutorial = lazy(() => import('../components/Tutorial/Tutorial'));
const LazyServices = lazy(() => import('../components/Servicos/Services'));


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
          url='/'
          btnClass='botao'
        />
        <LazyTutorial />
        <LazyServices />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default Home;


