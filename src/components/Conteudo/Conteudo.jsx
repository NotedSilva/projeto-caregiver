import React from 'react'
import GlobeImage from '../../assets/globe.png';
import SupportImage from '../../assets/support.png'
import PrinceImage from '../../assets/price.png'
import ClockImage from '../../assets/clock.png'
import '../Conteudo/Conteudo.css'

function Conteudo() {
  return (
    <section class="section50">
    <div class="choose">
      <div class="choose_wrapper">
        <div class="choose_left"></div>
        <div class="choose_right"></div>
      </div>
      <div class="container choose_container">
        <div class="choose_container_wrapper">
          <div class="choose_img_box">
            <img src={'https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&w=1600'} alt="" class="choose_img" />
          </div>
          <div class="choose_content">
            <div class="section_header">
              <h5 class="heading_5">Por que nós</h5>
              <h2 class="section_main_title">
                Criamos oportunidades para todos!
              </h2>
              <p class="choose_p">
              Na nossa missão de transformar vidas, oferecemos oportunidades únicas para todos que desejam fazer a diferença. Seja parte da nossa plataforma e descubra o poder de ser um cuidador.
              </p>
              <div class="icon_boxes">
                <div class="icon_box">
                  <img
                    src={GlobeImage}
                    alt=""
                    class="icon_box_icon" />
                  <p class="icon_box_test">Operações Seguras</p>
                </div>
                <div class="icon_box">
                  <img
                    src={SupportImage}
                    alt=""
                    class="icon_box_icon" />
                  <p class="icon_box_test">Suporte 24/7</p>
                </div>
                <div class="icon_box">
                  <img
                    src={ClockImage}
                    alt=""
                    class="icon_box_icon" />
                  <p class="icon_box_test">Acesso Ininterrupto</p>
                </div>
                <div class="icon_box">
                  <img
                    src={PrinceImage}
                    alt=""
                    class="icon_box_icon" />
                  <p class="icon_box_test">Preço Transparente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Conteudo