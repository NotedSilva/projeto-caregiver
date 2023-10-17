import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import img1 from '../assets/1.jpg';
import Footer from '../components/Footer/Footer.js';
import Tutorial from '../components/Tutorial/Tutorial';
import Services from '../components/Servicos/Services';
import Navigation from '../components/Busca/Navigation/Navigation';
import Products from '../components/Busca/Products/Products';
import Recomended from '../components/Busca/Recomended/Recomended';
import Sidebar from '../components/Busca/Sidebar/Sidebar';


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
          <Tutorial/>
          <Services/>
          <Sidebar/>
          <Navigation/>
          <Recomended/>
          <Products/>
          <Footer/>
        </>
    )
}

export default Home;