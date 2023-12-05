import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/Funcoes/ScrollToTop';
import AnimatedRoutes from './components/Funcoes/AnimatedRoutes';

function App() {
  
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
      <AnimatedRoutes/>
    </Router>
    </div>
  );
}

export default App;