import React, {Component, Fragment} from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="infocontact">
            <div className="clearfix"></div> 
            <div className="content">
                <h2>CONTACT ME</h2>
                <div className="social-links">
                {/*Github*/}
                <a href="https://hanhelle@gmail.com" rel="noopener noreferrer" target="_blank">
                 <i className="fab fa-github-square" />
                </a>
                 
                {/*Github*/}
                <a href="https://github.com/AnelVillegas" rel="noopener noreferrer" target="_blank">
                 <i className="fab fa-github"/>
                </a>
                <h3>CV</h3>
                
                 
            </div>
            </div>
            <div className =" endrectangle">
                <h1 className="a">Thanks for reading</h1>
                <h1 className="b" >Undefined is not a function</h1>
            </div>
            <Fragment>
            <a className= "homebtn" href="#button">{this.props.button}</a>

            </Fragment>
            </div>
        )

    }

}

export default Contact;