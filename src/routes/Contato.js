
import img2 from '../assets/2.jpg';
import React, { lazy, Suspense } from 'react';

// Importe os componentes usando React.lazy
const LazyNavbar = lazy(() => import('../components/Navbar/Navbar'));
const LazyMain = lazy(() => import('../components/Main/Main'));
const LazyFooter = lazy(() => import('../components/Footer/Footer'));
const LazyContatoForm = lazy(() => import('../components/ctnform/ContatoForm'));

function Contato() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <LazyNavbar />
        <LazyMain
          cName='main-mid'
          MainImg={img2}
          title='Contato'
          btnClass='hide'
        />
        <LazyContatoForm />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default Contato;
