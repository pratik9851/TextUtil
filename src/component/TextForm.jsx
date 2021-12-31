import React, { useState } from "react";

export default function TextForm({heading}){
    const [text,setText]=useState("")
    const handelUpclick=()=>{
       // console.log("btn clicked")
       let newtext=text.toUpperCase()
       setText(newtext)
    }
    const handelChange=(e)=>{
       // console.log(e.target.value)
       setText(e.target.value)
    }
return(
    <div>
       <h1>{heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handelChange} id="mytext" rows="8"></textarea>
        </div>
   <button type="button" onClick={handelUpclick} className="btn btn-primary">convert to Uppercase</button>
    </div>
)

}
