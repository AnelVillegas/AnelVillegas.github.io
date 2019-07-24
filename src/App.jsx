import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Background from './components/images/lake.jpg';
import Projects from './components/Projects';
import Contact from './components/Contact';
import  Skills from './components/Skills';

const myStyles={
    backgroundImage: `url( ${Background} )`,
    backgroundAttachment: `fixed`,
    backgroundRepeat: `norepeat`,
    backgroundSize: `cover`,
    backgroundPosition:`center`,
}

class App extends Component {
render() {
  return (
    <div>
      <div className="home"style= {myStyles}>
          <Navigation logoTilte="My Portfolio" />
          <Home title="If you desire to make a difference in the world, you must be different." title2="Elaine S.Dalton" button="About Me"/>
          <AboutMe/>
          <Skills/>
          <Projects/>
          <Contact   button="Home"/>
      </div>
   </div>
  );
}
}

export default App;
