import '../Servicos/ServicesStyles.css';
import ServicesData from '../Servicos/ServicesData'
import React from 'react';

function Services(){
    return(
        <section className="services">
            <h1>Nossos Serviços</h1>
            <p>Facilitando a sua vida com serviços excepcionais de cuidadoria.</p>
            <div className="servicescard">
                <ServicesData 
                image={'https://img.freepik.com/fotos-gratis/enfermeira-feliz-segurando-a-mao-do-homem-idoso-na-cadeira-de-rodas-no-jardim-no-lar-de-idosos_554837-197.jpg?size=626&ext=jpg&ga=GA1.1.1155766442.1690948429&semt=ais'}
                heading={'Cuidado Afetuoso e Compassivo para Idososs'}
                text={'Proporcionamos cuidado dedicado e experiente a idosos, entendendo suas necessidades únicas. Nosso compromisso é oferecer carinho, companhia e assistência profissional, assegurando o bem-estar de seus entes queridos.'}
                />

        <ServicesData
          image={'https://img.freepik.com/fotos-gratis/feche-a-crianca-desfrutando-do-jogo-didatico_23-2149316897.jpg?size=626&ext=jpg&ga=GA1.1.1155766442.1690948429&semt=ais'}
          heading={"Cuidado Amoroso e Atencioso para Crianças"}
          text={
            "Nossos cuidadores, apaixonados por crianças, criam um ambiente seguro e afetuoso. Com anos de experiência e treinamento, estamos aqui para cuidar, educar e entreter seus filhos, tornando cada momento memorável e repleto de alegria."
          }
        />

        <ServicesData
          image={'https://img.freepik.com/fotos-gratis/feche-o-medico-veterinario-cuidando-do-animal-de-estimacao_23-2149267842.jpg?size=626&ext=jpg&ga=GA1.1.1155766442.1690948429&semt=ais'}
          heading={"Amor e Dedicação aos Seus Peludos"}
          text={
            "Reconhecemos o valor do seu animal de estimação. Nossos cuidadores dedicados oferecem serviços de alta qualidade, incluindo passeios, alimentação e carinho. Seja um cão, gato ou outro bichinho, garantimos o amor e atenção que merecem."
          }
        />

        <ServicesData
          image={'https://img.freepik.com/fotos-gratis/vista-lateral-mulher-e-menino-tomando-selfie_23-2149531863.jpg?size=626&ext=jpg&ga=GA1.1.1155766442.1690948429&semt=ais'}
          heading={"Atenção Personalizada e Inclusiva para Você"}
          text={
            "Compreendemos a diversidade e oferecemos suporte especializado para pessoas com deficiência. Nossos profissionais adaptam-se às suas necessidades, proporcionando assistência cuidadosa e personalizada para promover seu bem-estar e felicidade."
          }
        />
      </div>
    </section>
  );
}

export default React.memo(Services);