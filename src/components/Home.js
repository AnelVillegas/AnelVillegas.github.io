import React, {Component} from 'react';
import Background from './images/background-paisaje.jpg';

const myStyles={
    backgroundImage: `url( ${Background} )`,
    height: '80vh',
    backgroundSize: 'cover'
}
class Home extends Component {
render() {
   
    return (
        <div className="home"style= {myStyles}>
          <div className ="rectangle">
            <h1>{this.props.title}</h1>
            <p>Elaine S.Dalton</p>
          </div>  
        
            <a href="#button">{this.props.button}</a>
        </div>

    )
}
}
export default Home;