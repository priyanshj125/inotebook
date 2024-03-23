import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/notecontext.js'



const About = () => {
  const a =useContext(noteContext);
  useEffect(() => {
    // a.update(); 
  },[]);


  return (
    <div>
         this is about
      
    </div>
  )
}

export default About ;