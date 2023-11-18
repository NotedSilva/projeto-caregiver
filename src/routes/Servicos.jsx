import React, { lazy, Suspense } from 'react';

// Importe os componentes usando React.lazy
import img3 from '../assets/3.jpg';
const LazyNavbar = lazy(() => import('../components/Navbar/Navbar'));
const LazyMain = lazy(() => import('../components/Main/Main'));
const LazyFooter = lazy(() => import('../components/Footer/Footer'));
const LazyServices = lazy(() => import('../components/Servicos/Services'));

function Servicos() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <LazyNavbar />
        <LazyMain
          cName='main-mid'
          MainImg={img3}
          title='Serviços'
          btnClass='hide'
        />
        <LazyServices />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default React.memo(Servicos);
