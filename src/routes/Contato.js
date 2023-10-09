import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js';
import img2 from '../assets/2.jpg';

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
        </>
    )
}

export default Contato;