import { Routes,Route } from "react-router-dom";
import Inicio from "./inicio";
import SobreNosotros from "./SobreNosotros";
import Contacto from "./Contacto";
import Clientes from "./Clientes"
import Layout from "./Layout";
import './App.css'
function App(){
  return (
    <div className="App">
      <Routes>
       < Route path="/" element={<Layout />} >
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Clientes" element={<Clientes />} />
        </Route>
      </Routes>
    </div>
      
    
  );
}

export default App;