import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import img4 from '../assets/4.jpg';
import Footer from '../components/Footer/Footer.js';
import Sobrenos from '../components/Sobrenos/Sobrenos.js';

function Sobre (){
    return(
        <>
        <Navbar />
          <Main
          cName='main-mid'
          MainImg={img4}
          title='Sobre Nós'
          btnClass='hide'
          />
          <Sobrenos/>
          <Footer/>
        </>
    )
}

export default Sobre;