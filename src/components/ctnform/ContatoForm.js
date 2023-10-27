import '../ctnform/ContatoFormStyles.css'
import React, { useState } from 'react';


function ContatoForm() {
  //testando pegar dados do input
  const [email, SetEamil] = useState("");
  const handleemail = (txt) => {
    SetEamil(txt.target.value);
  };
  function seeemail() {
    alert(email);
  }

  return (
    <section id="Contact" className="contact--section">
    <div>
      <h2>Contate-Nos</h2>
      <p className="text-lg">
      Estamos ansiosos para receber suas opiniões e comentários!
      </p>
    </div>
    <form className="contact--form--container">
      <div className="container">
        <label htmlFor="first-name" className="contact--label">
          <span className="text-md">Nome</span>
          <input
            type="text"
            className="contact--input text-md"
            name="first-name"
            id="first-name"
            required
          />
        </label>
        <label htmlFor="last-name" className="contact--label">
          <span className="text-md">Sobrenome</span>
          <input
            type="text"
            className="contact--input text-md"
            name="last-name"
            id="last-name"
            required
          />
        </label>
        <label htmlFor="email" className="contact--label">
          <span className="text-md">E-mail</span>
          <input
            type="email"
            className="contact--input text-md"
            name="email"
            id="email"
            required
          />
        </label>
        <label htmlFor="phone-number" className="contact--label">
          <span className="text-md">Telefone</span>
          <input
            type="number"
            className="contact--input text-md"
            name="phone-number"
            id="phone-number"
            required
          />
        </label>
      </div>
      <label htmlFor="choode-topic" className="contact--label">
        <span className="text-md">Assunto</span>
        <select id="choose-topic" className="contact--input text-md">
          <option>Escolha...</option>
          <option>Solicitação de Cuidador</option>
          <option>Informações sobre Cuidadores</option>
          <option>Problemas Técnicos</option>
          <option>Feedback e Sugestões</option>
          <option>Relatório de Abuso ou Mau Comportamento</option>
          <option>Parcerias e Oportunidades de Trabalho</option>
          <option>Assistência com Cadastro ou Perfil</option>
          <option>Perguntas sobre Pagamentos</option>
          <option>Relatórios de Satisfação</option>
          <option>Outros</option>
        </select>
      </label>
      <label htmlFor="message" className="contact--label">
        <span className="text-md">Mensagem</span>
        <textarea
          className="contact--input text-md"
          id="message"
          rows="8"
          placeholder="Escreva uma mensagem..."
        />
      </label>
      <label htmlFor="checkboc" className="checkbox--label">
        <input type="checkbox" required name="checkbox" id="checkbox" />
        <span className="text-sm">Eu aceito os termos</span>
      </label>
      <div>
        <button className="btn btn-primary contact--form--btn">Enviar</button>
      </div>
    </form>
  </section>
  );
}

export default ContatoForm;
