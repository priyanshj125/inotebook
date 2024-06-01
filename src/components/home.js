import React, { useContext } from "react";
import Notes from "./Notes.js";

const Home = (props) => {

  // console.log(props.searchTag+"home")
  return (
      
    <div>



      <Notes showalert={props.showalert} setSearchTag={props.setSearchTag} searchTag={props.searchTag} />
    </div>
  )

};

export default Home;
