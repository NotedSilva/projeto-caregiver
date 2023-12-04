import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CuidadorCadastro from '../components/CadastroCuidador/CudiadorCadastro'
import Footer from '../components/Footer/Footer'
import Galeria from '../components/Galeria/Galeria'

function Cuidador() {
  return (
    <>
    <Navbar/>
    <CuidadorCadastro/>
    <Galeria/>
    <Footer/>
    </>
  )
}

export default Cuidador