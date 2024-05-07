import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        if(word=="danger"){
            word="error"
        }
       
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    } 
    
   if (!props.alert) {
      return null; // or return some default content, depending on your requirements
   }
   
   
  return (
    <div style={{height:"50px"}}>
  
       <div className="alert alert-success" role="alert">
          <strong> {capitalize(props.alert.types)} </strong> : {props.alert.msg}
           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>

    
    
    </div>
  )
}

export default Alert