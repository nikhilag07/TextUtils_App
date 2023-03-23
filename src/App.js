

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import  React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  const [mode, setMode]=useState('light');

  const toggleMode =()=>{
  if(mode ==='light'){
  setMode('dark');
  document.body.style.backgroundColor='grey';
  }
  else{
  setMode('light');
  document.body.style.backgroundColor='white';
  }
  }
  return (
   
   <Router>
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<Textform heading="Enter Text Here to Analyze" />}/>
      </Routes>
  
 
      </div>
    
</Router>
   
  );
}

export default App;
 