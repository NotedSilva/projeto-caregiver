import React from 'react';
import '../Sobrenos/SobrenosStyles.css';


const About = () => {
  return (
   
    <section className="About-us">
    <div className="container20">
    <hr className='hr1' />
     <div className="box20">
      <h2 className="icon-about">🎯</h2>
      <h3>Missão</h3>
      <p className="p-about">Conduzir nossa empresa com dedicação e inovação,
       fornecendo soluções de alta qualidade que superem as expectativas de
        nossos clientes. Buscamos constantemente a excelência operacional,
         aprimorando nossos produtos e serviços.</p>
     </div>

     <div className="box20">
      <h2 className="icon-about">📊</h2>
      <h3>Visão</h3>
      <p className="p-about">Ser reconhecida como líder na indústria, destacando-nos
         pela inovação, integridade e comprometimento com 
         a excelência. Buscamos ser uma referência em sustentabilidade,
          contribuindo para um futuro melhor e mais equitativo.</p>
     </div>

     <div className="box20">
      <h2 className="icon-about">📌</h2>
      <h3>Valores</h3>
      <p className="p-about">Inovação: Estimulamos a criatividade e a busca constante por soluções inovadoras.<br/>
         Excelência: Buscamos a excelência em todas as nossas atividades. <br/>
         Comprometimento com o Cliente: Colocamos nossos clientes no centro de tudo o que fazemos. 
      </p>
     </div>
     </div>
     </section>
  )
}

export default React.memo(About);