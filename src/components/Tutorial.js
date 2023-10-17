import "./TutorialStyles.css";
import { useEffect, useState, useContext } from "react";
const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>Nunca foi tão simples, cuidar de quem você ama</h1>

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
            autoplay="autoplay"
            muted="muted"
            playsinline="playsinline"
            preload="none"
            loop="loop"
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
            autoplay="autoplay"
            muted="muted"
            playsinline="playsinline"
            preload="none"
            loop="loop"
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
            autoplay="autoplay"
            muted="muted"
            playsinline="playsinline"
            preload="none"
            loop="loop"
          >
            <source src="https://c.superprof.com/style/images/home/v4/animations/how-to/3.mov" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
