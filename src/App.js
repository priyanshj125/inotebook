
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
import LoadingBar from 'react-top-loading-bar'
import Form from './components/form.js';


 

function App() {
  const [alert, setAlert] = useState(null);
// const [searchTag, setSearchTag] = useState("12345");
const [progress, setProgress] = useState(0); 
  
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
      <NoteContext.Provider>


    <NoteState>


    <Router>
   <NoteState progress={progress}  setProgress={setProgress} />
    <Navbar /> 
    <LoadingBar color='#f11919' progress={progress} onLoaderFinished={() => setProgress(0)} />
    <Alert alert={alert} />
    <div className="container">

    <Routes>
    <Route path="/Action" element={<Form heading="ENTER THE TEXT TO ANALYZE" showalert={showalert}   />}/>

    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/Home" element={<Home showalert={showalert} />}/>
    <Route exact path="/Login" element={<Login  showalert={showalert} setProgress={setProgress}/>}/>
    <Route exact path="/Signup" element={<Signup  showalert={showalert} setProgress={setProgress}  />}/>


    </Routes>
    </div>


    </Router>


    </NoteState>
      </NoteContext.Provider>
    </div>
  );
}

export default App;
