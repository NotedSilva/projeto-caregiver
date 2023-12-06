import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PaginaAgradecimento from '../components/CadastroCuidador/Mensagem'
import Footer from '../components/Footer/Footer'
import {motion} from 'framer-motion'

function Agradecimento() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
    <Navbar/>
    <PaginaAgradecimento/>
    <Footer/>
    </motion.div>
  )
}

export default Agradecimento