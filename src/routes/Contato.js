import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js';
import img2 from '../assets/2.jpg';
import Footer from '../components/Footer.js';

function Contato (){
    return(
        <>
        <Navbar />
          <Main
          cName='main-mid'
          MainImg={img2}
          title='Contato'
          btnClass='hide'
          />
          <Footer/>
        </>
    )
}

export default Contato;