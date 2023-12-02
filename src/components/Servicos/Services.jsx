import '../Servicos/ServicesStyles.css';
import React from 'react';
import petsimg from '../../assets/pets.png'
import kidsimg from '../../assets/kids.png'
import grandimg from '../../assets/grandparents.png'
import pcdimg from '../../assets/woman.png'
import imgservice from '../../assets/service-img.jpg'

function Services(){
    return(
      <>
      <section class="services-section">
      <div class="image-container">
        <img src={imgservice} alt="Cuidadoria"/>
      </div>
      <div class="content-container">
        <div class="services-title">
          <h2>Serviços</h2>
        </div>
        <div class="services-grid">
          <div class="service">
            <img src={kidsimg} alt="Serviço para Crianças"/>
            <h3>Crianças</h3>
            <p>Serviços especializados para cuidar das crianças, garantindo um ambiente seguro e acolhedor.</p>
            <a href="/Servicos" class="read-more-button">Saiba Mais</a>
          </div>
          <div class="service">
            <img src={petsimg} alt="Serviço para Pets"/>
            <h3>Pets</h3>
            <p>Cuidados dedicados aos seus animais de estimação, proporcionando conforto e bem-estar.</p>
            <a href="/Servicos" class="read-more-button">Saiba Mais</a>
          </div>
          <div class="service">
            <img src={grandimg} alt="Serviço para Idosos"/>
            <h3>Idosos</h3>
            <p>Acompanhamento e cuidados personalizados para a terceira idade, promovendo qualidade de vida.</p>
            <a href="/Servicos" class="read-more-button">Saiba Mais</a>
          </div>
          <div class="service">
            <img src={pcdimg} alt="Serviço para PCDs"/>
            <h3>PCDs</h3>
            <p>Serviços adaptados para pessoas com deficiência, garantindo inclusão e suporte adequado.</p>
            <a href="/Servicos" class="read-more-button">Saiba Mais</a>
          </div>
        </div>
      </div>
      </section>
      </>
  );
}

export default React.memo(Services);