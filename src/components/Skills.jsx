import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Skills extends Component {
    render() {
        return(
            <section  id="infoSkills" className="infoSkill">
               {/* <div className="clearfix"></div>*/}
                    <div className="contentSkills">
                        <h2>SKILLS</h2>
                    <Container>
                        <h2 className="allSkills">Technical Skills</h2>
                        <Row>
                        <Col>
                            <h4 className="skills">HTML5</h4>
                            <i className="devicon-html5-plain"></i>
                        </Col>
                        <Col>
                            <h4 className="skills">CCS3</h4>
                            <i className="devicon-css3-plain"></i>
                        </Col>
                        <Col>
                            <h4 className="skills">JavaScript</h4>
                            <i className="devicon-javascript-plain"></i>
                        </Col>
                        <Col>
                            <h4 className="skills">React</h4>
                            <i className="devicon-react-original"></i>
                        </Col>
                        <Col>
                            <h4 className="skills">React-Bootstrap</h4>
                            <i className="devicon-bootstrap-plain"></i>
                        </Col>
                        <Col>
                            <h4 className="skills">Git</h4>
                            <i  className="devicon-git-plain"></i>
                        </Col>
                        <Col>
                            <h4 className="skills">Github</h4>
                            <i className="devicon-github-plain"></i>
                        </Col>
                    </Row>
                    </Container>
                    
                    <Container>
                    <h2 className="allSkills">Soft Skills</h2>
                    <Row>
                        <Col>
                            <h4 className="skills">Responsability</h4>
                            <i className="fas fa-user-tie"></i>
                        </Col>
                        <Col>    
                            <h4 className="skills">Self Learning</h4>
                            <i className="fas fa-book-reader"></i>
                        </Col>
                        <Col>    
                            <h4 className="skills">Team Work</h4>
                            <i className="fas fa-people-carry"></i>
                        </Col>
                        <Col>    
                            <h4 className="skills">Social Learning</h4>
                            <i className="fas fa-user-friends"></i>
                        </Col>
                    </Row>
                    </Container> "
                </div>  
            </section>

        )
    }
}

export default Skills;