import React from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDrop} from 'react-icons/md';
import '../Sobrenos/SobrenosStyles.css';
import img15 from '../../assets/5.jpg'

const Sobrenos = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidht flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src={img15} alt='Imagem' />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Nossos valores</span>
          <span>Valores da nossa equipe</span>
        </div>

      </div>
    </section>
  )
}

export default Sobrenos