import img1 from '../assets/1.jpg';
import React, { lazy, Suspense } from 'react';

// Importe os componentes usando React.lazy
const LazyNavbar = lazy(() => import('../components/Navbar/Navbar'));
const LazyMain = lazy(() => import('../components/Main/Main'));
const LazyFooter = lazy(() => import('../components/Footer/Footer'));
const LazyDepoimento = lazy(() => import('../components/depoimento/depoimento'));
const LazyFaq = lazy(() => import('../components/Faq/Faq'));

// tutorial
import '../components/Tutorial/TutorialStyles.css';

// services
import ServicesData from '../components/Servicos/ServicesData';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';

// galeria
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../components/Galeria/GaleriaStyles.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../assets/img16.jpg';
import slide_image_2 from '../assets/img17.jpg';
import slide_image_3 from '../assets/img18.jpg';
import slide_image_4 from '../assets/img19.jpeg';
import slide_image_5 from '../assets/img20.jpg';
import slide_image_6 from '../assets/img21.jpg';
import slide_image_7 from '../assets/img22.jpg';

// contato
import '../components/Contato/Contato.css'

function Home() {

   // Função tutorial incorporada no componente Home
  const Tutorial = () => {
    return (
      <section className="tutorial">
        <h1>Nunca foi tão simples, cuidar de quem você ama
  </h1>
        <div className="primeiro">
          <div className="primeiro-texto">
            <h2>1. Procure</h2>
            <p>
              Consulte livremente os perfis e entre em contato com o cuidador
              ideal de acordo com os seus critérios.
            </p>
          </div>
          <div className="video">
            <video
              autoPlay
              muted
              playsInline
              preload="none"
              loop
            >
              <source src="https://c.superprof.com/style/images/home/v4/animations/how-to/1.mov" />
            </video>
          </div>
        </div>
  
        <div className="segundo">
          <div className="segundo-texto">
            <h2>2. Contate</h2>
            <p>
              Rápido e fácil, os cuidadores respondem em algumas horas! E se você
              não conseguir encontrar o cuidador perfeito, a nossa equipe está
              sempre pronta pra ajudar.
            </p>
          </div>
          <div className="video">
            <video
              autoPlay
              muted
              playsInline
              preload="none"
              loop
            >
              <source src="https://c.superprof.com/style/images/home/v4/animations/how-to/2.mov" />
            </video>
          </div>
        </div>
  
        <div className="terceiro">
          <div className="terceiro-texto">
            <h2>3. Agende</h2>
            <p>
              Converse e agende os cuidados necessários através da nossa caixa de
              mensagens com o seu cuidador.
            </p>
          </div>
          <div className="video">
            <video
              autoPlay
              muted
              playsInline
              preload="none"
              loop
            >
              <source src="https://c.superprof.com/style/images/home/v4/animations/how-to/3.mov" />
            </video>
          </div>
        </div>
      </section>
    );
  };


  // Função Services incorporada no componente Home
  function Services() {
    return (
      <section className="services">
        <h1>Nossos Serviços</h1>
        <p>Facilitando a sua vida com serviços excepcionais de cuidadoria.</p>
        <div className="servicescard">
          <ServicesData 
            image={img5}
            heading={'Cuidado Compassivo para Idosos'}
            text={'Oferecemos cuidadores dedicados e experientes para proporcionar o melhor apoio aos idosos. Compreendemos as necessidades únicas de cada indivíduo e estamos comprometidos em fornecer carinho, companhia e assistência profissional para garantir o bem-estar de seus entes queridos.'}
          />

          <ServicesData
            image={img6}
            heading={"Cuidado Carinhoso para Crianças"}
            text={
              "Nossos cuidadores são apaixonados por cuidar das crianças, proporcionando um ambiente seguro e afetuoso. Com anos de experiência e treinamento, estamos aqui para cuidar, educar e entreter seus filhos, garantindo que cada momento seja memorável e repleto de alegria."
            }
          />

          <ServicesData
            image={img7}
            heading={"Amor e Atendimento para Seus Peludos"}
            text={
              "Sabemos o quanto seu animal de estimação significa para você. Nossos cuidadores de pets são amantes de animais dedicados que fornecem cuidados de alta qualidade, incluindo passeios, alimentação, e carinho. Seja um cão, gato ou outro bichinho, eles receberão o amor e a atenção que merecem."
            }
          />
        </div>
      </section>
    );
  }

  // função galeria incorporada
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
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
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

// função contato incorporada

function Contato() {
  return (
    <section className="cta">
        <h1>Não deixe perguntas sem resposta <br/> Tire suas dúvidas! </h1>
        <a href="contato" className="hero-btn">Contate-nos</a>
    </section>
  )
}


  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <LazyNavbar />
        <LazyMain
          cName='main'
          MainImg={img1}
          title='Cuide Bem, Viva Melhor'
          text='Seu Bem-Estar é a Nossa Prioridade'
          buttonText='Conheça Nossos Cuidadores'
          url='/NossosCuidadores'
          btnClass='botao'
        />
        {/* Chamada direta da função tutorial */}
        {Tutorial()}
        {/* Chamada direta da função Services */}
        {Services()}
        {/* Chamada direta da função galeria */}
        {Galeria()}
        <LazyDepoimento />
        <LazyFaq />
        {/* Chamada direta da função contato */}
        {Contato()}
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default Home;
