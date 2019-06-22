import React, {Component} from 'react';
import { Container, Row, Col, Card, Button, Image, Accordion }  from 'react-bootstrap';
import datalovers from './images/datalovers.png';


class Projects extends Component {
    render() {
        return(
            <div className="infoProjects">
            <div className="clearfix"></div> 
            <div className="content">
                <h2>SOME OF MY PROJECTS</h2>
                <div>
                <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <Image src={datalovers} height={165} rounded />
                    <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Data lovers
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                    <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Visitors
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                    <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Burguer Queen!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </Col>
                </Row>
                </Container>

                </div>
               
            </div>
            <a className= "Contactbtn" href="#button">{this.props.button}</a>
        </div>
        )

    }

}

export default Projects;