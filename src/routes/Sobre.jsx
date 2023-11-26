import {Suspense } from 'react';

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
          MainImg={'https://img.freepik.com/free-photo/boy-having-occupational-therapy-session-with-psychologist_23-2149091524.jpg?w=1380&t=st=1700961789~exp=1700962389~hmac=6f314ff87bdff7daa3ae7228c5a168925b2856ef5f79ea90c842f2374057b6ef'}
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