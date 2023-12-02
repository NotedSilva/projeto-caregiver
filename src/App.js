import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import SobreNos from "./routes/Sobre";
import Servicos from "./routes/Servicos";
import Contato from "./routes/Contato";
import Conectar from "./routes/Conectar";
import NossosCuidadores from "./routes/NossosCuidadores";
import Cuidador from "./routes/Cuidador";
import ScrollToTop from "./components/Funcoes/ScrollToTop";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/conectar" element={<Conectar />} />
        <Route path="/NossosCuidadores" element={<NossosCuidadores />} />
        <Route path="/cuidador" element={<Cuidador />} />
      </Routes>
    </div>
  );
}

export default App;
