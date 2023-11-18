import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/login/login';
import Footer from '../components/Footer/Footer.js';
import img14 from '../assets/img14.jpg';

const Conectar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
    </div>
  );
};

export default Conectar;
