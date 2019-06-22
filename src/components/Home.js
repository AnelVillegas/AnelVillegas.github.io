import React, {Component, Fragment} from 'react';
import flower from './images/flower.png';
class Home extends Component {
render() {
   
    return (
        <div className="home">
          <Fragment className="flower">
          <img src={flower} alt=""  className="float-left mr-2 rounded-circle" ></img>
          </Fragment>
          <div className ="rectangle">
            <h1>{this.props.title}</h1>
            <p>Elaine S.Dalton</p>
          </div>  
            <a className= "btnAbout" href="#button">{this.props.button}</a>
        </div>

    )
}
}
export default Home;