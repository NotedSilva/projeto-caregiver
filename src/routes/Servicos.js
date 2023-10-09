import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js';
import img3 from '../assets/3.jpg';

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
        </>
    )
}

export default Servicos;