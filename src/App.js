import { Route,Routes } from "react-router-dom";
import PageCard from "./Componets/PageCard";
import PageList from "./Componets/PageList";
import RenderPage from "./Componets/RenderPage";
import Search from "./Componets/Search"
import Page from "./Componets/Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element = {<PageList/>}/>
        <Route path="/About" element = {<PageCard/>}/>
        <Route path="/Information" element={<Page/>}/>
        <Route path="/Contact" element ={<RenderPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
