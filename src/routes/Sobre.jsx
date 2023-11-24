import { lazy,Suspense } from 'react';
import img4 from '../assets/4.jpg'; 
const Lazynav=lazy(()=>import("../components/Navbar/Navbar"))
const Lazymain=lazy(()=>import("../components/Main/Main"))
const Lazysobrenos=lazy(()=>import("../components/Sobrenos/Sobrenos"))
const Lazyfooter=lazy(()=>import("../components/Footer/Footer"))
import React from 'react';


function Sobre (){
    return(
        <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Lazynav />
          <Lazymain
          cName='main-mid'
          MainImg={img4}
          title='Sobre Nós'
          btnClass='hide'
          />
          <Lazysobrenos/>
          <Lazyfooter/>
          </Suspense>
        </>
    )
}

export default React.memo(Sobre);