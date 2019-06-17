import React, {Component} from 'react';



class Navigation extends Component {
render() {
   const sections = ['Home', 'About Me', 'Portfolio', 'Contact'];
   const navLinks = sections.map( section => {
     return (
       <li><a className="menu" href={"#" + section}>{section}</a></li>
     )
   });
    return (
    <nav>
      <ul>
        {navLinks} 
      </ul>
      <h2 className="logo">{this.props.logoTilte}</h2>
    </nav>
  );
}
}

export default Navigation;
