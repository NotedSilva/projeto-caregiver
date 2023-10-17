import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import img3 from '../assets/3.jpg';
import Footer from '../components/Footer/Footer.js';
import Services from '../components/Servicos/Services';

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