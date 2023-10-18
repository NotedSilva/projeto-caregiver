import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logincontexto from "./components/contextos/loginInfo";
import Home from "./routes/Home";
import SobreNos from "./routes/Sobre";
import Servicos from "./routes/Servicos";
import Contato from "./routes/Contato";
import Conectar from "./routes/Conectar";
import { useState } from "react";

function App() {
  //passando a variavel cujo valor é ola mundo para todas páginas
  const [nomeUser, SetnomeUser] = useState("ola mundo");
  return (
    <div className="App">
      <Logincontexto.Provider value={{ nomeUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/conectar" element={<Conectar />} />
        </Routes>
      </Logincontexto.Provider>
    </div>
  );
}

export default App;
