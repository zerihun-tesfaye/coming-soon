
import Nav from "./components/nav/Nav";
import {Route,Routes} from "react-router-dom";
import  Home from "./page/HomeP"

function App() {
  //  document.addEventListener('contextmenu',function(e){
  //     e.preventDefault();
  //  },false);
  //   document.addEventListener("keydown",function(e){
  //     if(e.keyCode || e.ctrlKey|| e.keyCode === 123){
  //       e.stopPropagation();
  //        e.preventDefault();
  //     }
  //   })
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
