import React, { useState } from 'react';
import Alert from './component/Alert';
//import About from './component/About';
import TextForm from './component/TextForm';
import Textutil from './component/Textutil';

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
     <Textutil toggle={handeltoggle} mode={mode} />
     <Alert alert={alert}/>
     <div className="container my-3">
       <TextForm heading='Enter your text to Analyze' mode={mode} />
     </div>
    {/* <About/>*/}
    </div>
  );
}

export default App;
