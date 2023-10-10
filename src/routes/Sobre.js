import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js';
import img4 from '../assets/4.jpg';
import Footer from '../components/Footer.js';

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
          <Footer/>
        </>
    )
}

export default Sobre;