import img4 from '../assets/4.jpg'
import React from 'react';
import Footer from '../components/Footer/Footer';
import Sobrenos from '../components/Sobrenos/Sobrenos';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Historia from '../components/Sobrenos/Historia';
import {motion} from 'framer-motion'


function Sobre (){
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        >
        <Navbar/>
          <Main
          cName='main-mid'
          MainImg={img4}
          title='Sobre Nós'
          btnClass='hide'
          />
          <Historia />
          <Sobrenos/>
          <Footer/>
        </motion.div>
    )
}

export default Sobre;