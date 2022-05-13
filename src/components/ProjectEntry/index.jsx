import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Tag } from '../../components/Tag';
export const ProjectEntry = ({id, title, state, tags, creationDate}) => (
    <a href='' style={{textDecoration: "none"}}>
        <Row key = {id} className="project">
                
            <Col className="col-1">{id}</Col>
            <Col className="col-6"><h6>{title}</h6></Col>
            <Col className="col-1">{state}</Col>
            <Col className="col-2" style={{fontSize:10}}>
                { tags.map(tag => { return ( <Tag tagName = {tag.tagName} tagColor = {tag.tagColor} /> )}) }
            </Col>
            <Col className="col-2" style={{fontSize:9}}>{creationDate}</Col>

            <br/><br/><hr/>

        </Row>
    </a>
);