import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';


class App extends Component {
render() {
  return (
   <div>
   <Navigation logoTilte="My Portfolio"/>
   <Home title="If you desire to make a difference in the world, you must be different." button="About Me"/>
   <AboutMe/>
   </div>
  );
}
}

export default App;
