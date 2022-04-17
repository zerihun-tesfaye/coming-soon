
import Nav from "./components/nav/Nav";
import {Route,Routes} from "react-router-dom";
import  Home from "./page/HomeP"

function App() {

  return (
    <div className="App">
         <Nav/>
           <Routes>
               <Route path="/"exact  element={<Home/>}/>
           </Routes>
    </div>
  );
}
 
export default App;
