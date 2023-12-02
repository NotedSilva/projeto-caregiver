import {Suspense } from 'react';
import img4 from '../assets/4.jpg'
import React from 'react';
import Footer from '../components/Footer/Footer';
import Sobrenos from '../components/Sobrenos/Sobrenos';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Historia from '../components/Sobrenos/Historia';


function Sobre (){
    return(
        <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Navbar/>
          <Main
          cName='main-mid'
          MainImg={img4}
          title='Sobre Nós'
          btnClass='hide'
          />
          <Historia />
          <Sobrenos/>
          <Footer/>
          </Suspense>
        </>
    )
}

export default React.memo(Sobre);