import React, {Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Conteudo2 from '../components/Servicos/Conteudo2';
import img3 from '../assets/3.jpg'






function Servicos() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Navbar/>
        <Main
          cName='main-mid'
          MainImg={img3}
          title='Serviços'
          btnClass='hide'
        />
        <Conteudo2/>
        <Footer/>
      </Suspense>
    </>
  );
}

export default React.memo(Servicos);
