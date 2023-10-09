import Navbar from '../components/Navbar.js';
import Main from '../components/Main.js';
import img1 from '../assets/1.jpg';

function Home (){
    return(
        <>
        <Navbar />
          <Main
          cName='main'
          MainImg={img1}
          title='Cuide Bem, Viva Melhor'
          text='Seu Bem-Estar é a Nossa Prioridade'
          buttonText='Conheça Nossos Cuidadores'
          url='/'
          btnClass='botao'
          />
        </>
    )
}

export default Home;