import React, { lazy, Suspense } from 'react';
import Cuidadores from '../components/Cuidadores/Cuidadores';

// Importe os componentes usando React.lazy

const LazyFooter = lazy(() => import('../components/Footer/Footer'));

function NossosCuidadores() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Cuidadores />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default React.memo(NossosCuidadores);
