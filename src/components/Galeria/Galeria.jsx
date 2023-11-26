import React from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Galeria/GaleriaStyles.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function Galeria() {

    
    return (
      <div className="container">
        <h1 className="heading">Galeria</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          initialSlide={1}
        >
          <SwiperSlide>
            <img src={'https://img.freepik.com/fotos-gratis/enfermeira-de-tiro-medio-verificando-homem_23-2148940067.jpg?size=626&ext=jpg&ga=GA1.1.1155766442.1690948429&semt=sph'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://img.freepik.com/fotos-gratis/mae-e-filha-de-tiro-medio-em-casa_23-2150275613.jpg?size=626&ext=jpg&ga=GA1.1.1155766442.1690948429&semt=ais'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://img.freepik.com/fotos-gratis/pessoa-ajudando-seu-vizinho-mais-velho_23-2149139785.jpg?w=1380&t=st=1700963351~exp=1700963951~hmac=05aa6cdc387afd9b1bcef8151b1dc20ec4b02c09b59d40b0d192d5f649683fc3'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://img.freepik.com/fotos-gratis/estilo-de-vida-da-crianca-em-cadeira-de-rodas_23-2149158048.jpg?w=1380&t=st=1700963132~exp=1700963732~hmac=2945f56ef904a51668760c071a13923ad19e8b6c22753a6746ea7988f70fe030'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://img.freepik.com/fotos-gratis/mulher-sorridente-de-tiro-medio-e-cachorro-fofo_23-2149652697.jpg?size=626&ext=jpg&ga=GA1.1.1155766442.1690948429&semt=ais'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://img.freepik.com/fotos-premium/uma-menina-diagnosticada-com-autismo-com-sua-mae-em-um-centro-de-reabilitacao_340855-3954.jpg?w=740'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://img.freepik.com/fotos-gratis/gato-malhado-castanho-com-gola-em-pe-no-jardim_23-2148045681.jpg?w=1380&t=st=1700963250~exp=1700963850~hmac=a492b1874f1fbe8418a3c5c381f40526c75b327aaad5a21aa9b386d1fbb9a2b7'} alt="slide_image" />
          </SwiperSlide>
  
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    );
  }

  export default Galeria;