import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Background from './components/images/lake.jpg';
import { fileURLToPath } from 'url';
import Responsive from './components/Responsive';
import Projects from './components/Projects';
import Contact from './components/Contact';


const myStyles={
    backgroundImage: `url( ${Background} )`,
    
}

class App extends Component {
render() {
  return (
    <div>
  {/*<Responsive/>*/}
  
    <div className="home"style= {myStyles}>
   <Navigation logoTilte="My Portfolio"/>
   <Home title="If you desire to make a difference in the world, you must be different." button="About Me"/>
   <AboutMe button="Projects"/>
   <Projects  button="Contact"/>
   <Contact title="Thanks for readding. Undefined is not a fucction"   button="Home"/>
   </div>
   </div>
  );
}
}

export default App;
