import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AnelVillegasCH from './images/AnelVillegasCH.png';




class Navigation extends Component {
render() {
  return(
 
   
    <Navbar sticky="top"  className='sticky-top'   bg='black' expand='lg' variant='dark'>
                <Navbar.Toggle  aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav   className='auto'>
                        <Nav.Link className="btnhome" href='#home'>Home</Nav.Link>
                        <Nav.Link className="btnhome"  href='#infoAbout'>About Me</Nav.Link>
                        <Nav.Link className="btnhome"  href='#infoProjects'>My Projects</Nav.Link>
                        <Nav.Link className="btnhome"  href='#infoContact'>Let’s talk!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <img src={AnelVillegasCH} alt="..." className="float-right persBrand"></img>
            </Navbar>
        
);

}
}

export default Navigation;
