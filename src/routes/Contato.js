import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import img2 from '../assets/2.jpg';
import Footer from '../components/Footer/Footer.js';
import ContatoForm from '../components/ctnform/ContatoForm.js'

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