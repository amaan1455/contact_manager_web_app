import React, { useState, useEffect } from "react";

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import Home from "./Home";
import View from"./View";

function App() {
  
  
 
 

  return (<BrowserRouter>
    <div className="App">
      <Header />
      
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/add" element={<AddContact/>}/>
      <Route  path="/update/:id" element={<AddContact/>}/>
      <Route  path="/view/:id" element={<View/>}/>
      </Routes>

      
      
    </div>
    </BrowserRouter>
    );
}

export default App;