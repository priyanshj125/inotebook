import React, { useContext, useEffect,useRef,useState } from "react";
import noteContext from "../context/notes/notecontext.js";
import Notesitem from "./Notesitem.js";
import Addnotes from "./Addnotes.js";
import { useNavigate} from'react-router-dom';


const Notes = () => {
    const context = useContext(noteContext);
  let navigate = useNavigate();
    
    const { notes,fetchalldata,editNotes} = context;
    useEffect(()=>{
      if (localStorage.getItem("token")) {
        fetchalldata();
      }
      else {
        navigate("/login");
        
      }

    },[])
    const ref = useRef(undefined);
    const refclose = useRef(undefined);

  const[note,setnotes] = useState({id:"" , etitle:"",edescription:"",etag:"default",})

    const updateNote = (currentnote) => {
      ref.current.click()
      setnotes({id:currentnote._id,etitle: currentnote.title,edescription:currentnote.description,etag :currentnote.tag});
    } 
    const handlesumitonclick = (e) => {
      editNotes(note.id,note.etitle,note.edescription,note.etag)
      refclose.current.click()
      

      console.log("update note susscessfull");
    };
    const onchange = (e) => {
      setnotes({...note,[e.target.name]: e.target.value })
  
    }
  return (
    <div className="text_u">
    
      <Addnotes />
  
     <button type="button" ref={ref}  className="btn btn-primary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>



  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">edit note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              TITLE
            </label>
            <input type="text"className="eform-control"id="etitle" name="etitle"  aria-describedby="emailHelp" value={note.etitle} onChange={onchange} />
       
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label"> 
             DESCRIPTION 
            </label>
            <input type="text"className="form-control"    id="edescription" name="edescription" value={note.edescription} onChange={onchange}/>
          </div>  
           <div className="mb-3">
            <label htmlFor="edescription" className="form-label">
           TAG 
            </label>
            <input type="text"className="form-control"    id="etag" name="etag" value={note.etag} onChange={onchange}/>
          </div>
        
        </form>










        </div>
        <div className="modal-footer">
        <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handlesumitonclick} className="btn btn-primary">UPDATE NOTE</button>
        </div>
        </div>
        </div>
      </div>





      <div>
        {/* <h2>your Notes</h2> */}
        <div className='container row my-3'>
        <div className='container '>

          {notes.length==0 && 'no notes to display'}
        </div>

{
          notes.map((notes)=>{
            return <Notesitem   updateNote={updateNote} note={notes} />
          })
        }

        </div>
      
    </div>
        </div>
  )
}

export default Notes
