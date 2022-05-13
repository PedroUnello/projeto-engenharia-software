import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
export const ProjectButton = ({imageSrc, imageAlt, buttonLabel}) => (
    <Col>
        <Button variant="link" style={{ textDecoration: "none", color: "white"}}>
            <Row>
                <Col><Image fluid src={imageSrc} alt={imageAlt} style={{width: "5vh", minWidth: 10}} /></Col> 
                <Col><h3>{buttonLabel}</h3></Col>
            </Row>
        </Button>
    </Col>
);