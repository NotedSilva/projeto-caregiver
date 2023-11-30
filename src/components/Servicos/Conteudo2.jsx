import React from 'react'
import '../Servicos/Conteudo2.css'

import acompanhamento from '../../assets/acompanhamento.png'
import comida from '../../assets/comida.png'
import gotas from '../../assets/gotas.png'
import atividade from '../../assets/atividade.png'
import calendario from '../../assets/calendario.png'
import cadeirarodas from '../../assets/cadeira-de-rodas.png'

function Conteudo() {
  return (
    <>
    <section class="services-section2">
        <div class="image-container2">
            <div class="services-image2">
                <img src="https://careforth.com/wp-content/uploads/sites/2/2023/10/GrandmaGrandDaughter-1.jpg?resize=768,761" alt="Cuidadores"/>
            </div>
            <img class="overlay-image2" src="https://maiscuidar.com/wp-content/uploads/2020/06/home5_img_03.png" alt="Overlay"/>
        </div>
        <div class="services-content2">
            <h2>SEMPRE JUNTOS</h2>
            <ul class="services-list2">
                <li>Nossos Cuidadores são capacitados para prestarem serviços em</li>
                <li class="service-item2"><img src="https://maiscuidar.com/wp-content/uploads/2020/06/logo_home_outline_icon.svg" alt="Residências"/> Residências</li>
                <li class="service-item2"><img src="https://maiscuidar.com/wp-content/uploads/2020/06/hospital_1.svg" alt="Hospitais"/> Hospitais</li>
                <li class="service-item2"><img src="https://maiscuidar.com/wp-content/uploads/2020/06/clinica.svg" alt="Clínicas"/> Clínicas</li>
                <li id="item2-2" class="service-item2"><img src="https://maiscuidar.com/wp-content/uploads/2020/06/lg_permanencia.svg" alt="Instituições de longa permanência"/> Instituições de longa permanência</li>
            </ul>
        </div>
    </section>

    <section class="services-section">
    <div class="services-content">
        <h2>Atividades que compõem os serviços</h2>
        <ul class="services-list">
            <li class="service-item">
                <img src={acompanhamento} alt="Acompanhamento"/>
                <span>Acompanhamento</span>
            </li>
            <li class="service-item">
                <img src={comida} alt="Preparo da Alimentação"/>
                <span>Preparo da Alimentação</span>
            </li>
            <li class="service-item">
                <img src={gotas} alt="Banho e Higiene"/>
                <span>Banho e Higiene</span>
            </li>
            <li class="service-item">
                <img src={atividade} alt="Atividades"/>
                <span>Atividades</span>
            </li>
            <li class="service-item">
                <img src={calendario} alt="Consultas"/>
                <span>Consultas</span>
            </li>
            <li class="service-item">
                <img src={cadeirarodas} alt="Mobilidade"/>
                <span>Mobilidade</span>
            </li>
        </ul>
    </div>
</section>
</>
  )
}

export default Conteudo;