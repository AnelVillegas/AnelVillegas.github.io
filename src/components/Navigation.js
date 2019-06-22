import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




class Navigation extends Component {
render() {
  return(
  <div  className='navigation'>
    <div   className='navigation-container'>

    <Navbar   className='navbar'   bg='black' expand='lg' variant='dark' sticky='top' >
              
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='auto'>
                        <Nav.Link className="btnhome"  href='/Home'>Home</Nav.Link>
                        <Nav.Link className="btnhome" href='/AboutME'>About Me</Nav.Link>
                        <Nav.Link className="btnhome" href='/Projects'>My Projects</Nav.Link>
                        <Nav.Link className="btnhome" href='/contact'>Let’s talk!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>

);

}
}

export default Navigation;
