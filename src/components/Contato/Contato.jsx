import React from "react";
import '../Contato/Contato.css'

function Contato() {
  return (
    <section className="cta">
        <h1>Não deixe perguntas sem resposta <br/> Conheça mais sobre nós! </h1>
        <a href="contato" className="hero-btn">Contate-nos</a>
    </section>
  )
}

export default React.memo(Contato)