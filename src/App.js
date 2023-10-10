import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import SobreNos from './routes/Sobre';
import Servicos from './routes/Servicos';
import Contato from './routes/Contato';

function App() {
  return (
    //ola mundo
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/sobrenos" element={<SobreNos/>}/> 
        <Route path="/Servicos" element={<Servicos/>}/> 
        <Route path="/Contato" element={<Contato/>}/> 
      </Routes>
    </div>
  );
}

export default App;
