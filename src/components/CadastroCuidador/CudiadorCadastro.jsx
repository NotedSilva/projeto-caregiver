import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CadastroCuidador/CuidadorCadastro.css';

function Cuidador() {
  return (
    <>
      <div className="landing-teacher-v4">
        <div className="container22">
          <div className="landing-teacher-v4-header-upper">
            <div className="text-content22">
              <h1>Cuidar e viver da sua dedicação!</h1>
              <p className="p-cuid">
              Livre e sem intermediários! Ofereça seus serviços de cuidador perto de sua localidade
               e conecte-se a clientes incríveis na vizinhança. Cuidados personalizados, auxílio
                em tarefas diárias, suporte emocional... Uma variedade de serviços para compartilhar. <br /> <br />

                Cuidadores dedicados, estudantes na área, autodidatas, apaixonados pelo cuidado,
                 profissionais graduados... Faça parte da comunidade Caregiver!
                  Estamos ansiosos para recebê-lo.
              </p>
            </div>
            <div className="registration-form">
              <div className="form10">
                <form className="form100" action="#">
                  <div className="form-header">
                    <div className="title-form">
                      <h1>Cadastre-se</h1>
                    </div>
                    <div className="login-button">
                      <button><a href="/conectar">Entrar</a></button>
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="input-box">
                      <label htmlFor="firstname">Primeiro Nome</label>
                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        placeholder="Primeiro nome"
                        required
                      />
                    </div>

                    <div className="input-box">
                      <label htmlFor="lastname">Sobrenome</label>
                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Sobrenome"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                      />
                    </div>

                    <div className="input-box">
                      <label htmlFor="number">Celular</label>
                      <input
                        id="number"
                        type="tel"
                        name="number"
                        placeholder="(xx) xxxx-xxxx"
                        required
                      />
                    </div>

                    <div className="input-box">
                      <label htmlFor="password">Senha</label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Senha"
                        required
                      />
                    </div>

                    <div className="input-box">
                      <label htmlFor="confirmPassword">Confirme sua Senha</label>
                      <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Senha novamente"
                        required
                      />
                    </div>
                  </div>

                  <div className="gender-inputs">
                    <div className="gender-title">
                      <h6>Gênero</h6>
                    </div>

                    <div className="gender-group">
                      <div className="gender-input">
                        <input id="female" type="radio" name="gender" />
                        <label htmlFor="female">Feminino</label>
                      </div>

                      <div className="gender-input">
                        <input id="male" type="radio" name="gender" />
                        <label htmlFor="male">Masculino</label>
                      </div>

                      <div className="gender-input">
                        <input id="others" type="radio" name="gender" />
                        <label htmlFor="others">Outros</label>
                      </div>

                      <div className="gender-input">
                        <input id="none" type="radio" name="gender" />
                        <label htmlFor="none">Prefiro não dizer</label>
                      </div>
                    </div>
                  </div>

                  <div className="continue-button">
                  <Link to="/agradecimento">
                    <button><a>Enviar</a> </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="header-shape"></div>
      </div>
    </>
  );
}

export default Cuidador;