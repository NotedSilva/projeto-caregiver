import '../depoimento/depoimento.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';



export default function Testimonial() {

    return (
      <section className="sec-60">
         <div class="container60">
        <div class="container__left">
          <h1>Leia o que nossos clientes acham sobre nós</h1>
          <p>
          Contamos com uma equipe de mais de 200 cuidadores especializados em nossa plataforma, dedicados a aprimorar a experiência do usuário e dos serviços prestados.
          </p>
          <p>
          Auxiliamos cuidadores a expandirem sua base de clientes e a gerarem receitas multiplicadas com nossos serviços.
          </p>
        </div>
        <div class="container__right">
          <div class="card60">
            <img src="https://openlab.ncl.ac.uk/assets/people-rob-anderson-small.jpg" alt="user" />
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
                <p>
                "Demonstraram profissionalismo excepcional, compaixão genuína e comprometimento."
                </p>
                <h4>- Gabriel Marques</h4>
              </div>
            </div>
          </div>
          <div class="card60">
            <img src="https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg" alt="user" />
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
                <p>
                "A plataforma melhorou drasticamente a experiência de todos os usuários que buscam cuidadores. "
                </p>
                <h4>- Emily Muniz</h4>
              </div>
            </div>
          </div>
          <div class="card60">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXq9R8M4hDABmgOuIcWYDSWuTOgkPnuzHr94TE6roWgpXF8at_S6vMExdFNWhOHBD9NQ&usqp=CAU" alt="user" />
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
                <p>
                "Eu amei trabalhar com a equipe da Caregiver. Totalmente especialistas no que fazem!"
                </p>
                <h4>- Larissa Neves</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
 