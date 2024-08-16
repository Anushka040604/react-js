import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert'


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const  [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1600)
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }
  return (
  <>
  <Router>
  <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
    
  <Routes>
          <Route path="/about" element={<About></About>}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
          </Route>
  </Routes>  
  </div>
  </Router>
  </>  
  );
}

export default App;
