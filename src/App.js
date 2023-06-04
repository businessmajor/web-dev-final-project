import logo from './logo.svg';
import './App.css';
import Stocks from './stocks';
import { BrowserRouter , HashRouter, Navigate} from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      
      <HashRouter>
         <div className="container">
         <Routes>
               <Route path="/" element={<Navigate to="/stocks" />} />
               <Route path="/stocks/*" element={<Stocks />} />
            </Routes>
         </div>
      </HashRouter>
    </div>
    
  );
}

export default App;
