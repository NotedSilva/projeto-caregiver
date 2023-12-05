import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/login/login';
import Footer from '../components/Footer/Footer';
import img14 from '../assets/img14.jpg';
import {motion} from 'framer-motion'

const Conectar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    
    style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ position: 'relative', marginLeft: '-390px', overflow: 'hidden' }}>
        <div
          style={{
            backgroundImage: `url(${img14})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '90vh',
          }}
        ></div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
        <Login />
      </div>
      <Footer style={{ marginTop: 'auto', marginBottom: '0' }} />
    </motion.div>
  );
};

export default Conectar;
