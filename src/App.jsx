import React from "react";
import Project from "./component/Project";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import './styles/App.css';
import { Link } from "react-scroll"
import up from './image/up-chevron.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


function App() {

  return (
    <div className="App">

      <Home />


      {/* <Router> */}
      <div>
        <nav >
          <ul>


            <Link to="Home" smooth={true} duration={1000}> <li ><FontAwesomeIcon icon={faHome} />HOME</li></Link>

            <Link to="About" smooth={true} duration={1000}><li><FontAwesomeIcon icon={faEdit} />ABOUT</li></Link>

            <Link to="Skills" smooth={true} duration={1000}><li><FontAwesomeIcon icon={faUserGraduate} />SKILLS</li></Link>

            <Link to="Project" smooth={true} duration={1000}> <li><FontAwesomeIcon icon={faFolder} />PORTFOLIO</li></Link>

          </ul>
        </nav>



        <About />
        <Skills />
        <Project />
        <div className="end">
          <Link to="Home" smooth={true} duration={1000}>  <img className="image" src={up} alt="" /></Link>
        </div>

      </div >
    </div >
  );
}

export default App;
