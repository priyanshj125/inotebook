import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/notecontext.js'



const About = () => {
  const a =useContext(noteContext);
  useEffect(() => {
    // a.update(); 
  },[]);


  return (
    <div className='app-content'>

    <div className="container my-3">
       
       <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ABOUT WEB APPLICATION
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>About the developer</strong> this application developed by Priyansh jain. i am pursuing int.mtech in geological technology  22410028 in IIT roorkee. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      application functionalty
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>.</strong> the main purpose of web site to store your notes in cloud servier which you can easly approch by login or create after sign up
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        NEED HELP .
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>help.</strong> if you face any problem in this application you can contact <strong>priyanshjain8491@gmail.com</strong>
      </div>
    </div>
  </div>
</div>

    </div>
    {/* <button type="button" onClick={togglestyle} className="btn btn-primary my-2">DARK MODE</button> */}
  

         
      
    </div>
  )
}

export default About ;