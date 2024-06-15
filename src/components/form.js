// import { getElementError } from '@testing-library/react';
import React,{useState}from 'react'

export default function Form(props) {
  const [text,setText]=useState('enter the text');
  const handleupclick=()=>{
    console.log("uppercase was clicked"+text);
    let newText= text.toUpperCase();
    setText(newText);
  };
  const handlecopy=()=>{
    var text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("copy clipboard","success");

  };
  const handleloclick=()=>{
    console.log("uppercase was clicked"+text);
    let newText= text.toLowerCase();
    setText(newText);
  };
  const handleonclearclick=()=>{
    setText('');
  }


    const handleonchange =(event)=> {
      console.log('onchange');
      setText(event.target.value);
    };
   
  
  return (
    <>
    <div className='container white-text' >
   
 
   
    <h1 >{props.heading}</h1>
<div className=" mb-3 white-text">
  <label for="mybox" class="form-label"></label>
  <textarea className="form-control" id="mybox" value={text} onChange={handleonchange}  rows="8"  ></textarea>  
</div>
<div>
<button className="btn btn-primary mx-1  my-1 "  onClick={handleupclick} >change to uppercase</button>
<button className="btn btn-primary mx-1  my-1"  onClick={handleloclick} >change to lowercase</button>
<button className="btn btn-primary mx-1  my-1"  onClick={handlecopy} >copy text</button>
<button className="btn btn-danger mx-1  my-1"  onClick={handleonclearclick} >clear</button>

</div>
<div className='container' >
  <p>{text.split(/\s+/).filter((element)=>{return  element.length!==0}).length} words and {text.length} are chareceter</p>
  <p>time taking to read text is {0.4*text.split(" ").length} sec</p>
  <h2>preview</h2>
  <p>{text.length>0?text:"enter some text to privew"}</p>
</div>
    </div>
</>  )
}

// export default form

