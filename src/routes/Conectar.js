import Navbar from '../components/Navbar/Navbar';
import Login from '../components/login/login';
import Footer from '../components/Footer/Footer.js';
import img1010 from '../assets/1010.jpg';

const Conectar=()=>{
return( 
<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundImage: `url(${img1010})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
    <Login/>
    </div>
    <Footer />

    
    </div>

) 
       

}
export default Conectar