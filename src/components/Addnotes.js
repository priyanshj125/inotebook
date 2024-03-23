import React, { useState } from "react";
import noteContext from "../context/notes/notecontext";
import { useContext } from "react";

const Addnotes = () => {
  const context=useContext(noteContext);
  const {addNotes} = context;
  const[note,setnotes] = useState({title:"",description:"",tag:"default",})
  const handlesumitonclick = (e) => {
    e.preventDefault();
    addNotes(note.title,note.description,note.tag);
  };
  const onchange = (e) => {
    setnotes({...note,[e.target.name]: e.target.value })

  }
  return (
    <div>
      <div className="container my-3">
        <h2>Add notes</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <input type="text"className="form-control"id="title" name="title"  aria-describedby="emailHelp"onChange={onchange} />
       
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
            description
            </label>
            <input type="text"className="form-control"    id="description" name="description" onChange={onchange}/>
          </div>  
           <div className="mb-3">
            <label htmlFor="description" className="form-label">
            tag
            </label>
            <input type="text"className="form-control"    id="tag" name="tag" onChange={onchange}/>
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={handlesumitonclick}>
            Add note
          </button>
        </form>
        <h2>your Notes</h2>
      </div>
    </div>
  );
};

export default Addnotes;
