
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
          MainImg={'https://img.freepik.com/fotos-gratis/enfermeira-segurando-as-maos-de-um-homem-senior-por-simpatia_23-2148740011.jpg?w=1380&t=st=1700961572~exp=1700962172~hmac=2d4e99b75d94527c1e14637bdfeac69f49894514341d7c825acab9ee7df8769b'}
          title='Contato'
          btnClass='hide'
        />
        <LazyContatoForm />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default React.memo(Contato);
