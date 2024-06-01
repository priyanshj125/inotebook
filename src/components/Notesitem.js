import React,{ useContext }  from 'react'
import noteContext from "../context/notes/notecontext.js";



const Notesitem = (props) => {
  const context = useContext(noteContext);

  const {deleteNotes} = context
   const {note,updateNote}=props; 
  return (
    <div className='col-md-3 my-3'>
    {/* // <divnnn className=''> */}

      <div className="card my-3 " >
  
    <div className="title "> {note.title}</div><div id="root"></div>
   
   
 
    <div className="box box1">
        <div className="content ">
            <span className="box-title">describtion</span>{note.description}
            <span className="box-text">
            </span>
        </div>
    </div> 
    <div className="">
    <i className="fa-solid fa-trash mx-2" onClick={()=>{ deleteNotes(note._id)}}></i>
    <i className="fa-solid fa-user-pen mx-2"  onClick={()=>{updateNote(note)}} ></i>


    </div>
</div>



<div/>

 
  </div>
  )
}

export default Notesitem
