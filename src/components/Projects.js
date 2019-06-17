import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return(
            <div className="infoProjects">
            <div className="clearfix"></div> 
            <div className="content">
                <h2>SOME OF MY PROJECTS</h2>
                <h3> 
                KantoDex
                Registro de visitantes
                Burguer Queen
                <br></br> </h3>
              </div>
            <a className= "Contactbtn" href="#button">{this.props.button}</a>
        </div>
        )

    }

}

export default Projects;