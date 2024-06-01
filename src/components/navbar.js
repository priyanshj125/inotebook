import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useState } from "react";
import { Context } from 'express-validator/lib/context';
import { useContext } from "react";
import notecontext from '../context/notes/notecontext';




const Navbar = (props) => {
const [islogin,setislogin]=useState(false);

// const [searchInput, setSearchInput] = useState("");

//  console.log(props.searchTag);
const {setSearchTag }= useContext(notecontext)

const token = localStorage.getItem('token');
useEffect(() => {
    const token = localStorage.getItem('token');
    setislogin(!!token);
}, []);



//   function displayNotes(notes) {
//     const notesContainer = document.getElementById('notes-container');
//     notesContainer.innerHTML = '';
//     notes.forEach(note => {
//       const noteElement = document.createElement('div');
//       noteElement.classList.add('note');
//       noteElement.innerText = note.description;
//       notesContainer.appendChild(noteElement);
//     });
//   }
  
  // Fetch all notes when the page loads
//   document.addEventListener('DOMContentLoaded', fetchAndFilterNotes);

// if (token) {
//     setislogin(true);
// }else{
//     setislogin(false);
// }
// const [searchTag, setSearchTag] = useState('defult');
// console.log("defult"+props.searchTag);

const handlechange = (Value)=>{
    setSearchTag(Value);
    // console.log(props.searchTag+" navbar handle change")

}


let location = useLocation();
const handlelogout=()=>{
    localStorage.removeItem("token");
    setislogin(false)
    window.location.reload();
}

// console.log(islogin);
    // const islogin=[]
    useEffect(() => {
       console.log(location.pathname); 
       <Link role="button" className="btn btn-danger mx-2" to="/">log out</Link>
      },[location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Inotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname=="/Home"?"active":"" }`} aria-current="page"  to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname=="/about"?"active":"" }`  }to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/home">Action</Link></li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item">
                            </li>
                        <form class="form-inline my-2 my-lg-0">
                       <input class="form-control mr-sm-2" id='search-input' type="search" value={props.searchTag} onChange={(e)=>handlechange(e.target.value)} placeholder="Search by TAG" aria-label="Search"/>
                       </form>
                        </ul>
                      
                        <Link role="button" className="btn btn-primary mx-2" to="/Login">log-in</Link>
                        <Link role="button" className="btn btn-light mx-2" to="/Signup">sign-up</Link>
                        <button role='button' className={`btn btn-danger disable mx-2 ${islogin==false?'disabled':''}`} onClick={handlelogout}>logout</button>
                        
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
