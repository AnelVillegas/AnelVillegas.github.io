import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="infoProjects">
            <div className="clearfix"></div> 
            <div className="content">
                <h2>CONTACT ME</h2>
                <h3> 
                kmkmkm
                <br></br> </h3>
            </div>
            <div className =" endrectangle">
                <h1>{this.props.title}</h1>
            </div>
            <div>
            <a className= "homebtn" href="#button">{this.props.button}</a>
            </div>
            </div>
        )

    }

}

export default Contact;