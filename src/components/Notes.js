import React, { useContext, useEffect,useRef } from "react";
import noteContext from "../context/notes/notecontext.js";
import Notesitem from "./Notesitem.js";
import Addnotes from "./Addnotes.js";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes,fetchalldata} = context;
    useEffect(()=>{
      fetchalldata();

    },[])
    const ref = useRef(undefined);
    const updateNote = (note) => {
      // context.updateNote(note);
      ref.current.click()
      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    } 
  return (
    <>
    
      <Addnotes />
  
     <button type="button" ref={ref}  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>



  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        ...
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
        </div>
        </div>
        </div>
      </div>





      <div>
        {/* <h2>your Notes</h2> */}
        <div className='container row'>
        {
          notes.map((notes)=>{
            return <Notesitem   updateNote={updateNote} note={notes} />
          })
        }

        </div>
      
    </div>
        </>
  )
}

export default Notes
