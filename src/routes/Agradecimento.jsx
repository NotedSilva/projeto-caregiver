import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PaginaAgradecimento from '../components/CadastroCuidador/Mensagem'
import Footer from '../components/Footer/Footer'
import {motion} from 'framer-motion'

function Agradecimento() {
  return (
    <motion.div
    initial={{ height: 0 }}
    animate={{ height: "100%" }}
    exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
    >
    <Navbar/>
    <PaginaAgradecimento/>
    <Footer/>
    </motion.div>
  )
}

export default Agradecimento