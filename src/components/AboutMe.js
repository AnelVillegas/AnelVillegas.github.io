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
                I am sutdiying for being a front-end developer, at Laboratoria bootcamp, also I´m a graduated Industrial Engineer, I enjoy 
                Phisics and Matemathics; and now the code too.
                I think women have a lot of good things to contribute to the technology world. 
                <br></br> </h3>
              </div>
            </div>
            </div>

        );
    }
}

export default AboutMe;