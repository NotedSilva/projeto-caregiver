import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CuidadorCadastro from '../components/CadastroCuidador/CudiadorCadastro'
import Footer from '../components/Footer/Footer'
import Galeria from '../components/Galeria/Galeria'
import {motion} from 'framer-motion'

function Cuidador() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
    <Navbar/>
    <CuidadorCadastro/>
    <Galeria/>
    <Footer/>
    </motion.div>
  )
}

export default Cuidador