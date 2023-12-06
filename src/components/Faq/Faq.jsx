import React, { useState } from 'react';
import '../Faq/FaqStyles.css';

const dataFaq = [
  {
    question: 'Como se cadastrar como cuidador?',
    answer: 'Para se cadastrar como cuidador na plataforma Caregiver. \n Acesse o site ou aplicativo Caregiver.\n Clique em Seja Cuidador.\n - Preencha o formulário de inscrição com suas informações pessoais, experiência, habilidades e certificações.\nAguarde a aprovação da sua inscrição pela equipe Caregiver.'
  },
  {
    question: 'Como fazer a contratação de um cuidador?',
    answer: 'Para encontrar um cuidador na plataforma Caregiver.\n Faça login na sua conta ou cadastre-se como usuário.\n Navegue pelos perfis de cuidadores disponíveis.'
  },
  {
    question: 'Como funciona o sistema de pagamento?',
    answer: 'A plataforma Caregiver oferece um sistema de pagamento integrado. Os detalhes do pagamento podem variar, mas geralmente, o pagamento é processado de forma segura e transparente através da plataforma.'
  },
  {
    question: 'Como são feitas as avaliações e feedbacks?',
    answer: 'As avaliações e feedbacks são uma parte essencial da plataforma Caregiver. Após a conclusão de um serviço, tanto o usuário quanto o cuidador podem avaliar um ao outro. Isso ajuda a criar um ambiente confiável e permite que outros usuários tomem decisões informadas ao escolher um cuidador ou um cliente.'
  }

];

function Faq() {
  const [activeFaq, setActiveFaq] = useState(-1);

  function toggleAccordion(index) {
    setActiveFaq(prevActiveFaq => (prevActiveFaq === index ? -1 : index));
  }

  return (
    
    <section className="back-faq">
    <div className="container-1">
  <h1 className="h1-h1">Perguntas Frequentes</h1>
  <div className="accordion__faq">
    {dataFaq.map((item, index) => (
      <div key={index} onClick={() => toggleAccordion(index)}>
        <div className="accordion__faq-heading">
          <h3 className={activeFaq === index ? "active" : ""}>
            {item.question}
          </h3>
          <span className={`accordion__expand-button ${activeFaq === index ? "active" : ""}`}>
            {activeFaq === index ? '-' : '+'}
          </span>
        </div>
        <div className={`accordion__faq-answer ${activeFaq === index ? "active" : "inactive"}`}>
          {item.answer}
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default Faq;