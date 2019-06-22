import React, {Component} from 'react';
import my_image from './images/my_image.jpg';

class AboutMe extends Component{

    render() {
        return(
            <div className="infoAbout">
            <div className="clearfix">
            <img src={my_image} alt=""  className="float-right mr-2 rounded-circle" ></img>
                 <div className="description">
                <h2>HELLO !</h2>
                <h3>My name is Anel Villegas. I´m based in Guadalajara, Jalisco.
                I am studiying for become a front-end developer, at Laboratoria bootcamp, also I´m a graduated Industrial Engineer, I enjoy 
                Physics and Matemathics; and now coding too.
                I think women have a lot of good things to contribute to the technology world. 
                <br></br> </h3>
              </div>
              
            </div>
            <a className= "Projectsbtn" href="#button">{this.props.button}</a>
            </div>  
            
        
            

        );
    }
}

export default AboutMe;