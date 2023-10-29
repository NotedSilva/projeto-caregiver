import React, { useState } from 'react';
import '../Faq/FaqStyles.css';

const dataFaq = [
  {
    question: '1. Como posso me cadastrar como cuidador na plataforma "Caregiver"?',
    answer: 'Para se cadastrar como cuidador na plataforma "Caregiver", siga os seguintes passos:\n - Acesse o site ou aplicativo "Caregiver".\n - Clique em "Cadastro" ou "Registrar".\n - Preencha o formulário de inscrição com suas informações pessoais, experiência, habilidades e certificações.\n - Aguarde a aprovação da sua inscrição pela equipe "Caregiver".'
  },
  {
    question: '2. Sou um usuário em busca de um cuidador. Como posso encontrar um cuidador adequado?',
    answer: 'Para encontrar um cuidador adequado na plataforma "Caregiver", siga os seguintes passos:\n - Faça login na sua conta ou cadastre-se como usuário.\n - Navegue pelos perfis de cuidadores disponíveis.\n - Filtrar os cuidadores com base em suas necessidades, como localização, disponibilidade e especializações.\n - Analise os perfis dos cuidadores, suas avaliações e experiências anteriores.\n - Inicie uma conversa com um cuidador e prossiga com a contratação se estiver satisfeito.'
  },
  {
    question: '3. Como funciona o sistema de pagamento na plataforma "Caregiver"?',
    answer: 'A plataforma "Caregiver" oferece um sistema de pagamento integrado. Os detalhes do pagamento podem variar, mas geralmente, o pagamento é processado de forma segura e transparente através da plataforma. Os cuidadores podem receber pagamentos diretamente na plataforma após a conclusão dos serviços.'
  },
  {
    question: '4. Como são feitas as avaliações e feedbacks?',
    answer: 'As avaliações e feedbacks são uma parte essencial da plataforma "Caregiver". Após a conclusão de um serviço, tanto o usuário quanto o cuidador podem avaliar um ao outro. Isso ajuda a criar um ambiente confiável e permite que outros usuários tomem decisões informadas ao escolher um cuidador ou um cliente.'
  },
  {
    question: '5. Existe um sistema de chat para comunicação entre cuidadores e usuários?',
    answer: 'Sim, a plataforma "Caregiver" fornece um sistema de chat integrado que permite a comunicação direta entre cuidadores e usuários. Você pode usar o chat para discutir detalhes do serviço, disponibilidade, requisitos e outras informações relevantes.'
  },
  {
    question: '6. Como posso cancelar ou modificar uma contratação?',
    answer: 'Você pode cancelar ou modificar uma contratação entrando em contato com o cuidador ou usuário com quem você fez a contratação. É importante comunicar as mudanças ou cancelamentos com antecedência e garantir que ambas as partes estejam de acordo.'
  },
  {
    question: '7. Como faço para relatar problemas ou obter suporte técnico na plataforma "Caregiver"?',
    answer: 'Se você encontrar problemas técnicos, tiver dúvidas ou precisar de suporte, entre em contato com a equipe de suporte da plataforma "Caregiver". Normalmente, você pode encontrar informações de contato na seção de Ajuda ou Suporte do site ou aplicativo.'
  },
];

function Faq() {
  const [activeFaq, setActiveFaq] = useState(-1);
  const [accordionIcons, setAccordionIcons] = useState({});

  function toggleAccordion(index) {
    if (index === activeFaq) {
      setActiveFaq(-1);
      setAccordionIcons({ ...accordionIcons, [index]: '-' });
    } else {
      setActiveFaq(index);
      setAccordionIcons({ ...accordionIcons, [index]: '+' });
    }
  }

  return (
    <div className="container-1">
      <div>
        <span className="accordion__title">Perguntas Frequentes(FAQ)</span>
        <h1>Dúvidas Comuns Resolvidas</h1>
      </div>
      <div className="accordion__faq">
        {dataFaq.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className="accordion__faq-heading">
              <h3 className={activeFaq === index ? "active" : ""}>
                {item.question}
              </h3>
              <span className={`accordion__expand-button ${activeFaq === index ? "active" : ""}`}>
                {accordionIcons[index] || '+'}
              </span>
            </div>
            <div className={`accordion__faq-answer ${activeFaq === index ? "active" : "inactive"}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;