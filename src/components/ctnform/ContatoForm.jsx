import React, { useEffect } from 'react';
import '../ctnform/ContatoFormStyles.css'



const ContatoComponent = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  return (
    <div className="container50">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Entre em contato conosco</h3>
          <p className="text">
          Estamos aqui para ouvir você!
          Entre em contato e deixe-nos ajudar a transformar suas ideias em realidade.
          </p>

          <div className="info">
            <div className="information">
            <i id='icon' className="fa-solid fa-location-dot fa-2xl" style={{ color: '#c67a41' }}></i>
              <p>Frederico Moura, Cidade Nova, SP 144</p>
            </div>
            <div className="information">
            <i id='icon' className="fa-solid fa-envelope fa-xl" style={{ color: '#c67a41' }}></i>
              <p>caregiver@gmail.com</p>
            </div>
            <div className="information">
            <i id='icon' className="fa-solid fa-phone fa-xl" style={{ color: '#c67a41' }}></i>
              <p>(11) 3029-5534</p>
            </div>
          </div>

          <div className="social-media">
            <p>Conecte-se conosco :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
              <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
              <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="" autoComplete="off">
            <h3 className="title">Contate-nos</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Nome</label>
              <span>Nome</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Telefone</label>
              <span>Telefone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Mensagem</label>
              <span>Mensagem</span>
            </div>
            <input type="submit" value="Enviar" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContatoComponent;