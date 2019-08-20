import React, {Component, Fragment} from 'react';
import {OverlayTrigger , Popover, Button} from 'react-bootstrap';
class Contact extends Component {
    render() {
        return(
            <section id="infoContact" className="infoContact">
            <div className="clearfix"></div> 
            <div className="content">
                <h2>CONTACT ME</h2>
                <div className="social-links">

                {/*Resume*/}
                <a className="icon" href="https://www.dropbox.com/s/wp9rdwwhe72rjcv/Anel%20English%20CV2-PDF.pdf?dl=0" rel="noopener noreferrer" target="_blank">
                <i className="far fa-file fa-x3"></i>
                </a>

                {/*email*/}
                <a href="mailto:hanhelle@gmail.com">
                 <i className="fas fa-envelope-square fa-x3 "></i>
                </a>

                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/anel-villegas-rivera" rel="noopener noreferrer" target="_blank">
                <i className= "fab fa-linkedin fa-x3"></i>
                </a>

                {/*Github*/}
                <a href="https://github.com/AnelVillegas" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github fa-x3"></i>
                </a>

                 
            </div>
            </div>
            <div className =" endrectangle">
                <h1 className="a">Thanks for reading</h1>
                <h1 className="b" >Undefined is not a function</h1>
            </div>
            <Fragment>
            <a className= "homebtn" href="#home">{this.props.button}</a>

            </Fragment>
            </section>
        )

    }

}

export default Contact;