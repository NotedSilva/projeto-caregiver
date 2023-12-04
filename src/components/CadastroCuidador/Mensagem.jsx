import React from 'react';
import '../CadastroCuidador/Mensagem.css'

function PaginaAgradecimento() {
  return (
    <section className="agradecimento-con">
    <div className="agradecimento1">
      <h1 className="agradecimento-title">Agradecemos por escolher se juntar à Comunidade!</h1>
      <p className="agradecimento-text">
        Seu cadastro foi recebido com entusiasmo pela equipe da Caregiver. Sabemos o
        quanto é importante a dedicação e o cuidado que você oferece, e estamos
        ansiosos para criar uma experiência significativa para você e para todos
        que fazem parte da nossa comunidade.
      </p>
      <p className="agradecimento-text">
        Nossa equipe está trabalhando com zelo para revisar suas informações.
        Este processo pode levar algum tempo, pois queremos garantir a integridade
        e a segurança de nossa comunidade. Pedimos a sua paciência e saiba que
        valorizamos cada cuidador que se junta a nós.
      </p>
    </div>
    </section>
  );
}

export default PaginaAgradecimento;