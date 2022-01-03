import React, { useState } from 'react';
import Alert from './component/Alert';
import About from './component/About';
import TextForm from './component/TextForm';
import Textutil from './component/Textutil';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light')
  const[alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setalert(null)
    },1500)
}

  const handeltoggle=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="#003366"
      showalert("dark mode enabled","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showalert("light mode enabled","success")
    }
  }
 

  return (
    
    <div >
      <Router>
     <Textutil toggle={handeltoggle} mode={mode} />
     <Alert alert={alert}/>
     <div className="container my-3">
       
     <Routes>
          <Route path="/about" element={<About />}/>
            
        
          
          <Route path="/" element={<TextForm heading='Enter your text to Analyze' mode={mode} />}/>
          
        
        </Routes>
       
     </div>
     </Router>
    </div>
    
  );
}

export default App;
