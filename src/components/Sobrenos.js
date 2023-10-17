import "./SobrenosStyles.css";
import Logincontexto from "./contextos/loginInfo";
import { useEffect, useState, useContext } from "react";

function Sobrenos() {
  //pego a variável que passei no arquivo app
  const { nomeUser } = useContext(Logincontexto);
  return (
    <div className="Sobrenos-container">
      <h1>
        {" "}
        <i class="fa-solid fa-circle-check"></i> Missão
      </h1>
      <p>
        Nossa missão é cuidar de forma compassiva e profissional das pessoas e
        animais de estimação que confiam em nós. Queremos tornar a vida de
        nossos clientes mais fácil e mais feliz, proporcionando-lhes um ambiente
        seguro e amoroso.
      </p>

      <h1>
        <i class="fa-solid fa-heart"></i> Visão
      </h1>
      <p>
        A Caregiver nasceu em 2005 com um objetivo claro: proporcionar cuidado
        de qualidade para idosos, crianças e animais de estimação. Acreditamos
        que o cuidado atencioso é a base para uma vida feliz e saudável, e é
        isso que nos motiva todos os dias.
      </p>

      <h1>
        <i class="fa-solid fa-eye"></i> Valores
      </h1>
      <p>
        Compaixão: O cuidado é a essência de tudo o que fazemos. Demonstramos
        compaixão em todas as interações com nossos clientes e seus entes
        queridos.
      </p>
      <p>
        Profissionalismo: Mantemos os mais altos padrões de profissionalismo em
        todos os nossos serviços, garantindo que nossos clientes possam confiar
        em nós.
      </p>
      <p>
        Segurança e Bem-Estar: A segurança e o bem-estar de nossos clientes,
        sejam eles idosos, crianças ou pets, são nossa prioridade número um.
      </p>
      <p>
        Crescimento Contínuo: Buscamos constantemente aprimorar nossos serviços
        e expandir para atender mais comunidades, levando o cuidado da Caregiver
        a um público cada vez maior.
      </p>
    </div>
  );
}

export default Sobrenos;
