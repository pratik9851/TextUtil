import React, { useState } from "react";

export default function TextForm({heading}){
    const [text,setText]=useState("")
    const handelUpclick=()=>{
       // console.log("btn clicked")
       let newtext=text.toUpperCase()
       setText(newtext)
    }
    
    const handelloclick=()=>{
        // console.log("btn clicked")
        let newtext=text.toLowerCase()
        setText(newtext)
     }

    const handelChange=(e)=>{
       // console.log(e.target.value)
       setText(e.target.value)
    }
return(
    <>
    <div className="container">
       <h1>{heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handelChange} id="mytext" rows="8"></textarea>
        </div>
   <button type="button" onClick={handelUpclick} className="btn btn-primary mx-2">convert to Uppercase</button>
   <button type="button" onClick={handelloclick} className="btn btn-primary mx-2">convert to Lowercase</button>
    </div>

     <div className="container my-3">
         <h1>Your text Summary</h1>
         <p>{text.split(" ").length} words and {text.length} chaacters</p>
         <p>{0.8 * text.split(" ").length} Minutes read</p>
          
          <h1>Preview</h1>
          <div className="container my-2">
            {text}
          </div>

     </div>

    </>
)

}
