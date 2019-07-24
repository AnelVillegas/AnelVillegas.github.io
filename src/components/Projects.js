import React, {Component} from 'react';
import {Card, Button, CardGroup, Alert}  from 'react-bootstrap';
import datalovers from './images/datalovers.png';
import visitors from './images/visitors.png';
import burguerqueen from './images/burguerqueen.png';

class Projects extends Component {
    render() {
        return(
         <section id="infoProjects" className="infoProjects">
           <div className="clearfix"></div> 
            <div className="content">
                <h2>SOME OF MY PROJECTS</h2>
                <CardGroup>
                <Card className="projectcard">
                <Card.Img variant="top" src={datalovers}/>
                <Card.Body>
                    <Card.Title>Kanto-Dex</Card.Title>
                    <div>
                   Project about the characters of the Pokemon Go game. Managing the API of the characters
                   and making filtered by some parameters.
                   </div>
                    <Button href="https://anelvillegas.github.io/GDL002-data-lovers/src/" target="_blank"variant="dark" color="black">See more</Button>
                </Card.Body>
                </Card>
                <Card className="projectcard" >
                <Card.Img variant="top" src={visitors}/>
                <Card.Body>
                    <Card.Title>DoorIn</Card.Title>
                    <div>
                   Project about the register of visitors system of a coworking in order to let know 
                   the coworkers by mail when thay have a visit. Firebase is used for the administration of data.   
                   </div>
                    <Button variant="dark" href="https://anelvillegas.github.io/GDL002-visitors/src/index.html" target="_blank" >See more</Button>
                </Card.Body>
                </Card>
                <Card className="projectcard">
                <Card.Img variant="top" src={burguerqueen}/>
                <Card.Body>
                    <Card.Title>Burguer Queen</Card.Title>
                    <div>
                   Project about the system of capturing the orders in a fast food restaurant, 
                   coordinating the waiters work and the kintche work. Firebase is used for administration the orders and menu.  
                   </div>
                   <Button href="https://anelvillegas.github.io/GDL002-burger-queen" variant="dark" target="_blank">See more</Button>
                </Card.Body>
                </Card>
                </CardGroup>
                <hr/>

            </div>
            
        </section>
        )

    }

}

export default Projects;