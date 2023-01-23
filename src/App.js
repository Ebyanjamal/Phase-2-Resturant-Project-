import { Route,Routes } from "react-router-dom";
import About from "./Componets/About";
import Home from "./Componets/Home";
import Contact from "./Componets/Contact";
import Search from "./Componets/Search"
import Information from "./Componets/Information";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/Information" element={<Information/>}/>
        <Route path="/Contact" element ={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
