import React,{ useState,useEffect } from "react";

import NoteContext from "./notecontext";

const NoteState=(props)=>{
  const Host= "http://localhost:5000"
  const notesintial=[];
  //get all notesf
  const [searchTag, setSearchTag] = useState("");
  // const { searchTag, setSearchTag } = props;
  const [filteredNotes, setFilteredNotes] = useState([]);

  // console.log(props.searchTag+"notesatate");
    const [notes,setNotes]=useState(notesintial);
    //add notesgit branch main


    const fetchalldata = async()=>{
      const response = await fetch(`${Host}/api/notes/fetch`, {
        method: "GET",  
        headers: {
          "Content-Type": "application/json",
          "auth_token":localStorage.getItem('token')
        },
      
      });
      // console.log("fetch all data successfully");
      const json = await response.json();
      // filterAndSetNotes(json);
       
    //  const  filteredNotes = json.filter(
    //     (notes) => notes.tag && notes.tag.includes(searchTag)
    //   );
    const notesArray =  Array.isArray(json) ? json : [json];

  const notes = notesArray.filter(
    (notes) => notes.tag && notes.tag.includes(searchTag)
  );
      console.log(searchTag+"vjhvlkjvhkbmvcljzzzzzzzzzzz");
      console.log(notes);
      
      setNotes([...notes]);
      // console.log(notes);
      
    }
    // const filterAndSetNotes = (notesData) => {
    //   let filteredNotes = notesData.filter(
    //     (note) => note.tag && note.tag.includes(searchTag)
    //   );
    //   console.log(filteredNotes);
    //   setNotes(filteredNotes);
    //   // console.log(notes);
    // };
  
      // const [notes,setNotes]=useState(notesintial);
      //add notes

      const addNotes = async(title,description,tag)=>{
        try {
          const response = await fetch (`${Host}/api/notes/addnotes`,{
            method: 'POST',  
            headers: {
              "Content-Type": "application/json",
              "auth_token":localStorage.getItem('token')
            },
           
            body: JSON.stringify({title,description,tag}), 
          });
          const json = await response.json();
        
          console.log("adding  new note");
          const note= {
            "_id": "6y558765680d34d3f0p",
            "user": "65e783443c9da9e41e1dbc36",
            "title": title,
            "description":description,
            "tag": tag,
            "__v": 0
          };
          setNotes(notes.concat(note))





        } catch (error) {
          console.error(error.message);
        }
      }

      //delete notes
// console.log(props.check+"notestatezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
      const deleteNotes = async (id)=>{
        console.log("this is delete notes");
        const response = await fetch(`${Host}/api/notes/deletenote/${id}`, {
          method: "DELETE",  
          headers: {
            "Content-Type": "application/json",
            "auth_token":localStorage.getItem('token')
          }
          
        });
        const json = response.json()

        console.log("deleting note with id "+id);
      // console.log(notes.user.toString());

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
            "auth_token":localStorage.getItem('token')
          },
          
          body: JSON.stringify({title,description,tag}), 
        });
        const json = await response.json()
      let newNote = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNote.length; index++) {
          const element = newNote[index];
          if(element._id===id){
            newNote[index].title=title;
            newNote[index].description=description;
            newNote[index].tag=tag;
            break;
          }
        }
        setNotes(newNote);
         
      }

      useEffect(() => {
        fetchalldata();
      }, [searchTag]);

   

    
    return(
 
        <NoteContext.Provider   value={{notes,setNotes,editNotes,deleteNotes,addNotes,fetchalldata,setSearchTag,searchTag} } >
           { props.children}
        </NoteContext.Provider>
    )
      

}
export default NoteState ;