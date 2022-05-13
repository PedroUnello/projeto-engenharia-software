import './style.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Badge from 'react-bootstrap/esm/Badge';
import Button from 'react-bootstrap/esm/Button';
import React, { Component } from 'react';

 class TopBar extends Component{
    state = {
        userIcon: './imgs/c.png',
        projectName: 'none',
        statusFilter: 'none',
        prazoFilter: 'none',
    }

    render(){

        const { userIcon, projectName, statusFilter, prazoFilter } = this.state;

        return (
            <Container fluid id="background">
                <Row>
                    {/*Icon and navbar*/}
                    <Col className="col-2">
                        <Row>
                            <Col className="col-5"><img src="./imgs/logo.png " alt="Logo" width="150px "></img></Col>
                            <Col className="col-2">
                                <Navbar expand="false" width = {10}  className="color-nav" bg="transparent" variant="dark">
                                    <Container>
                                        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
                                        <Navbar.Collapse id="basic-navbar-nav">
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
                        </Row>
                        
                    </Col>
                     {/*Icon and navbar*/}
                    <Col className="col-10">

                        <Row>
                            <Col className="col-10" > 

                                {this.props.inProject ?
                                    <Row>
                                        <Col className="projectSettings">
                                            <h3>
                                                <Badge bg="secondary">{projectName}</Badge>
                                            </h3>
                                            {this.props.isAdmin ? 
                                                <div>
                                                    <Button type="button" variant="secondary" onClick={() => console.log()}>+</Button>
                                                    <Button type="button" variant="secondary" onClick={() => console.log()}>-</Button> 
                                                </div>
                                                : <div/>
                                            }
                                        </Col>

                                        <Col className='filtro'>
                                            <h4>Filtrar:</h4>
                                            
                                            <select className='filterButton'>
                                                <option value="0 ">{statusFilter}</option>
                                            </select>
                                            
                                            <select className='filterButton'>
                                                <option value="0 ">{prazoFilter}</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    : <div/>
                                }
                                

                            </Col>

                            <Col className="col-2">
                                <img className='userImage' src={userIcon} alt="User Icon" width="100px "></img>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </Container>
        );
    }


 }


export default TopBar;
