
import './App.css';
import { Route,BrowserRouter as Router,Link,Routes } from 'react-router-dom'
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Home from './components/home.js'
import NoteContext from './context/notes/notecontext.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import NoteState from './context/notes/notestate.js';
import Alert from './components/alert.js';
import  {useState}  from 'react';

 

function App() {
  const [alert, setAlert] = useState(null);
  const showalert=(message,types)=>{
    setAlert({
      msg:message,
      types:types
    })
    //  setTimeout(() => {
    //   setAlert(null)
    // }, 1500);
  }
  return (
    <div className="gradient-background">
    <NoteState>


    <Router>
    <Navbar/> 
    <Alert alert={alert} />
    <div className="container">


    <Routes>

    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/Home" element={<Home showalert={showalert}/>}/>
    <Route exact path="/Login" element={<Login  showalert={showalert} />}/>
    <Route exact path="/Signup" element={<Signup  showalert={showalert}  />}/>


    </Routes>
    </div>


    </Router>


    </NoteState>
    </div>
  );
}

export default App;
