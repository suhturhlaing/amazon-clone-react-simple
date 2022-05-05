
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from './component/Checkout';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Routes>
       
          <Route path='/checkout' exact element={<Checkout/>}>
           
          </Route>
          
        </Routes> 
     
     </div>
    </Router>
    
  );
}

export default App;
