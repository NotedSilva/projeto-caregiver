import React, {Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Conteudo2 from '../components/Servicos/Conteudo2';






function Servicos() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Navbar/>
        <Main
          cName='main-mid'
          MainImg={'https://img.freepik.com/free-photo/elderly-person-spendng-tim-with-their-pets_23-2149486342.jpg?w=1380&t=st=1700961637~exp=1700962237~hmac=05befb962499c8a569b9b619b229cdf0d1135ab051f9f0441d2931de5da5e39f'}
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
