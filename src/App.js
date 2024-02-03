import  NavBar  from "./components/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home.jsx";
import Chaveamento from './Pages/Chaveamento.jsx'
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chave" element={<Chaveamento />} />
      </Routes>
    </Router>
  );
}
export default App;
