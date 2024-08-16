import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpclick=()=>{
    console.log("uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleOnChange=(event)=>{
    console.log("onchnage occurred");
    setText(event.target.value);
  }
  const handleLoClick=()=>{
    let sText=text.toLowerCase();
    setText(sText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClearClick=()=>{
    let cText=" ";
    setText(cText);
  }
  const [text,setText]=useState('');
  return (   
    <>
<div className='container' /*style={{backgroundColor:props.mode==='dark'?'white':'black'}}*/>
 <div class="mb-3">
    <h1>{props.heading}</h1>
     <label for="myBox" class="form-label">Example textarea</label>
    <textarea  class="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}/>
</div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>  
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>  
 </div>
 <div className="container my-3" /*style={{backgroundColor:props.mode==='dark'?'white':'black'}}*/>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length-1} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length-1}minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
 </div>
 </>
  )
}
