import Services from '../components/Servicos/Services';
import Depoimento from '../components/depoimento/depoimento'
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Tutorial from '../components/Tutorial/Tutorial';
import Contato from '../components/Contato/Contato';
import React, { Suspense } from 'react';
import Conteudo from '../components/Conteudo/Conteudo';

function Home() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Navbar/>
        <Main
          cName='main'
          MainImg={'https://img.freepik.com/fotos-gratis/casal-senior-curtindo-o-por-do-sol-juntos-pela-agua-gerada-pela-ia_188544-24741.jpg?w=1480&t=st=1700961475~exp=1700962075~hmac=fe5e2ba9ad0e44e567509f7347014fecfc21b96e2cbdea91f2ffca931f25982a'}
          title='Cuide Bem, Viva Melhor'
          text='Seu Bem-Estar é a Nossa Prioridade'
          buttonText='Conheça Nossos Cuidadores'
          url='/NossosCuidadores'
          btnClass='botao'
        />
        <Tutorial/>
        <Conteudo/>
        <Services/>
        <Depoimento/>
        <Faq/>
        <Contato/>
        <Footer/>
      </Suspense>
    </>
  );
}

export default Home;
