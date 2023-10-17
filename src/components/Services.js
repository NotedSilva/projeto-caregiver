import "./ServicesStyles.css";
import ServicesData from "./ServicesData";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import { useEffect, useState, useContext } from "react";

function Services() {
  return (
    <div className="services">
      <h1>Serviços</h1>
      <p>Facilitando a sua vida com serviços excepcionais de cuidadoria.</p>
      <div className="servicescard">
        <ServicesData
          image={img5}
          heading={"Cuidado Compassivo para Idosos"}
          text={
            "Oferecemos cuidadores dedicados e experientes para proporcionar o melhor apoio aos idosos. Compreendemos as necessidades únicas de cada indivíduo e estamos comprometidos em fornecer carinho, companhia e assistência profissional para garantir o bem-estar de seus entes queridos."
          }
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
    </div>
  );
}

export default Services;
