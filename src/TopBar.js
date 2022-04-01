import './TopBar.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Badge from 'react-bootstrap/esm/Badge';
import Button from 'react-bootstrap/esm/Button';
import { Component } from 'react';

 class TopBar extends Component{
    state = {
        userIcon: 'none',
        projectName: 'none',
        statusFilter: 'none',
        prazoFilter: 'none',
    }

    render(){

        const { userIcon, projectName, statusFilter, prazoFilter } = this.state;

        return (
            <Container fluid>
                <Row>

                    <Col lg = {2}>
                        <Col lg = {2}><img src="logo.png " width="200px "></img></Col>
                        <Col>
                            <Navbar expand="false" width = {10}>
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                    <Navbar.Collapse id="basic-navbar-nav" >
                                        <Nav className="me-auto">
                                            <Nav.Link href="#Tarefas">Tarefas</Nav.Link>
                                            <NavDropdown title="Projetos" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Projeto1</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Projeto2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Projeto3</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Col>

                    <Col>

                        <Col>  
                            
                            <h3>
                                <Badge bg="secondary">{projectName}</Badge>
                            </h3>
                            <Button type="button" variant="secondary" onClick={() => console.log()}>+</Button>
                            <Button type="button" variant="secondary" onClick={() => console.log()}>-</Button>

                        </Col>

                        <Col>

                            <div className='filtro'>
                            
                                <h4>Filtrar:</h4>
                                
                                <select>
                                    <option value="0 ">{statusFilter}</option>
                                </select>
                                
                                <select>
                                    <option value="0 ">{prazoFilter}</option>
                                </select>
                            </div>

                        </Col>

                        <Col>
                            <img src={userIcon} width="50px "></img>
                        </Col>

                    </Col>

                </Row>
            </Container>
        );
    }


 }


export default TopBar;
