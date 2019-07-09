import React, {Component, Fragment} from 'react';
import flower from './images/flower.png';
class Home extends Component {
render() {
   
    return (
        <section  id="home" className="home">
          <Fragment className="flower">
          <img src={flower} alt=""  className="float-left mr-2 rounded-circle" ></img>
          </Fragment>
          <div className ="rectangle">
            <h1>{this.props.title}</h1>
            <p>{this.props.title2}</p>
          </div>  
        </section>

    )
}
}
export default Home;