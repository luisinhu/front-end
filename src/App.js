import  NavBar  from "./components/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home.jsx";
import Chaveamento from './Pages/Chaveamento.jsx'
import Grid from "./components/Grid.jsx";
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chave" element={<Chaveamento />} />
        <Route path="/tabela" element={<Grid />} />
      </Routes>
    </Router>
  );
}
export default App;
