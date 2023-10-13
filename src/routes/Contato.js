import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js';
import img2 from '../assets/2.jpg';
import Footer from '../components/Footer.js';
import ContatoForm from '../components/ContatoForm.js'

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
          <ContatoForm/>
          <Footer/>
        </>
    )
}

export default Contato;