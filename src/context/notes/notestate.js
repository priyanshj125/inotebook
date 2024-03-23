import React from "react";

import NoteContext from "./notecontext";
import { useState } from "react";

const NoteState=(props)=>{
  const Host= "http://localhost:5000"
    const notesintial=[];
    //get all notes
    const [notes,setNotes]=useState(notesintial);
    //add notes

    const fetchalldata = async()=>{
      const response = await fetch(`${Host}/api/notes/fetch`, {
        method: "GET",  
        headers: {
          "Content-Type": "application/json",
          "auth_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc4MzQ0M2M5ZGE5ZTQxZTFkYmMzNiIsIm5hbWUiOiJwcml5YW5zaCIsImVtYWlsIjoiamVza2x2cGFzbmhAZ2FtaWwuY29tIiwiaWF0IjoxNzA5NjcxMjM2fQ.4SpERJuaLyHs7rBOjpAVcrDUZhRstE1EmweYcT__Xn4"
        },
       
        // body: JSON.stringify(title,description,tag), 
      });
      console.log("fetch all data successfully");
      const json = await response.json();
      console.log(json);
      setNotes(notes.concat(json));
    }

      // const [notes,setNotes]=useState(notesintial);
      //add notes

      const addNotes = async(title,description,tag)=>{
        try {
          const response = await fetch (`${Host}/api/notes/addnotes`,{
            method: 'POST',  
            headers: {
              "Content-Type": "application/json",
              "auth_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc4MzQ0M2M5ZGE5ZTQxZTFkYmMzNiIsIm5hbWUiOiJwcml5YW5zaCIsImVtYWlsIjoiamVza2x2cGFzbmhAZ2FtaWwuY29tIiwiaWF0IjoxNzA5NjcxMjM2fQ.4SpERJuaLyHs7rBOjpAVcrDUZhRstE1EmweYcT__Xn4"
            },
           
            body: JSON.stringify({title,description,tag}), 
          });
        
          console.log("adding  new note");
          const note= {
            "_id": "6y558765680d34d3f0p",
            "user": "65e783443c9da9e41e1dbc36",
            "title": title,
            "description":description,
            "tag": tag,
            "__v": 0
          };
          // const note = await response.json();
          setNotes(notes.concat(note))
          // setNotes(notes.concat(note))





        } catch (error) {
          console.error(error.message);
        }
      }

      //delete notes

      const deleteNotes = async (id)=>{
        const response = await fetch(`${Host}/api/notes/deletenote/${id}`, {
          method: "DELETE",  
          headers: {
            "Content-Type": "application/json",
            "auth_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc4MzQ0M2M5ZGE5ZTQxZTFkYmMzNiIsIm5hbWUiOiJwcml5YW5zaCIsImVtYWlsIjoiamVza2x2cGFzbmhAZ2FtaWwuY29tIiwiaWF0IjoxNzA5NjcxMjM2fQ.4SpERJuaLyHs7rBOjpAVcrDUZhRstE1EmweYcT__Xn4"
          }
         
        });
        const json = response.json()

        console.log("deleting note with id"+id);
        const newnotes=notes.filter((notes)=>{
          return notes._id!==id
        }) 
        setNotes(newnotes);     
      }

      //edit notes

      const editNotes = async(id,title,description,tag)=>{
        const response = await fetch(`${Host}/api/notes/updatenote/${id}`, {
          method: "PUT",  
          headers: {
            "Content-Type": "application/json",
            "auth_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc4MzQ0M2M5ZGE5ZTQxZTFkYmMzNiIsIm5hbWUiOiJwcml5YW5zaCIsImVtYWlsIjoiamVza2x2cGFzbmhAZ2FtaWwuY29tIiwiaWF0IjoxNzA5NjcxMjM2fQ.4SpERJuaLyHs7rBOjpAVcrDUZhRstE1EmweYcT__Xn4"
          },
         
          body: JSON.stringify({title,description,tag}), 
        });
        const json = response.json()
      
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id===id){
            notes[index].title=title;
            notes[index].description=description;
            notes[index].tag=tag;
          }
          
        }
         
      }





    
    return(
 
        <NoteContext.Provider   value={{notes,setNotes,editNotes,deleteNotes,addNotes,fetchalldata} } >
           { props.children}
        </NoteContext.Provider>
    )
      

}
export default NoteState ;