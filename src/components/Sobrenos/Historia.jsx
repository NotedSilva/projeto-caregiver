import React from 'react';
import '../Sobrenos/Historia.css'
import imghistoria from '../../assets/about-6.png'


function Historia() {
    return (
      <section className="historia">
        <div className="main-img">
          <img src={imghistoria} />
        </div>
        <div className="main-text10">
          <h1>Nossa História</h1>
          <hr />
          <p>
          A Caregiver foi fundada em 2023 com o propósito de estabelecer uma conexão entre profissionais e clientes. Apesar de sermos uma empresa nova, com pouca experiência de mercado, oferecemos serviços especializados em nichos específicos.
Ao escolher a nossa empresa, você estará confiando os cuidados de um familiar ou animal de estimação a uma equipe comprometida em proporcionar o melhor ambiente de afeto para o seu ente querido. Reconhecemos a importância de selecionar cuidadores adequados, pois não se pode simplesmente designar qualquer pessoa para cuidar daqueles que precisam de atenção e carinho.

          </p>
  
          <div className="last-text">
            <div className="text1">
              <h3>200+</h3>
              <h5>Cuidadores</h5>
            </div>
  
            <div className="text2">
              <h3>20k</h3>
              <h5>Clientes Satisfeitos</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Historia;