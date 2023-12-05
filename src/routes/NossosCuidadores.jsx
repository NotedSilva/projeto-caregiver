import React, { lazy, Suspense } from 'react';
import Cuidadores from '../components/Cuidadores/Cuidadores';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import {motion} from 'framer-motion'

function NossosCuidadores() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
        <Navbar/>
        <Cuidadores />
        <Footer />
    </motion.div>
  );
}

export default NossosCuidadores;
