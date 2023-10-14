import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js';
import img3 from '../assets/3.jpg';
import Footer from '../components/Footer.js';
import Services from '../components/Services.js'

function Servicos (){
    return(
        <>
        <Navbar />
          <Main
          cName='main-mid'
          MainImg={img3}
          title='Serviços'
          btnClass='hide'
          />
          <Services/>
          <Footer/>
        </>
    )
}

export default Servicos;