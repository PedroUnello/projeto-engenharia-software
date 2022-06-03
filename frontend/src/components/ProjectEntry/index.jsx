import React from 'react';
import { Col, Row, Button, Accordion, Container } from 'react-bootstrap';

import PropTypes from 'prop-types';
import './style.css';
import { Link } from 'react-router-dom';

export const ProjectEntry = ({
  //Component for every Project in list
  id,
  title,
  hash,
  state,
  desc,
  creationDate,
  inDelete,
  deleteFunc,
  index,
}) => (
  <Row>
    <Col className="col-11">
      <Accordion.Item
        eventKey={`${index}`}
        style={{ background: 'transparent' }}
      >
        <Accordion.Header>
          <Container fluid style={{ background: 'transparent' }}>
            <Row className="project">
              <Col className="col-1">{id}</Col>
              <Col className="col-7">
                <h6>
                  <Link
                    to={`/projetos/${hash}`}
                    style={{
                      textDecoration: 'none',
                      pointerEvents: 'click',
                      color: 'white',
                    }}
                  >
                    {title}
                  </Link>
                </h6>
              </Col>
              <Col className="col-1">{state}</Col>
              <Col className="col-3" style={{ fontSize: 9 }}>
                {creationDate}
              </Col>
            </Row>
          </Container>
        </Accordion.Header>
        <Accordion.Body style={{ background: '#2f3338', borderRadius: 5 }}>
          <p style={{ color: 'lightgrey' }}>Descrição:</p>
          <p style={{ color: 'grey', verticalAlign: 'center' }}>{desc}</p>
        </Accordion.Body>
      </Accordion.Item>{' '}
    </Col>
    <Col>
      {inDelete ? (
        <Button
          style={{ marginTop: 10 }}
          size="lg"
          className="deleteButton justify-content-end"
          type="button"
          variant="danger"
          onClick={() => {
            deleteFunc(id);
          }}
        >
          X
        </Button>
      ) : (
        <></>
      )}
    </Col>
  </Row>
);

ProjectEntry.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  hash: PropTypes.string.isRequired,
  state: PropTypes.string,
  tags: PropTypes.array,
  desc: PropTypes.string,
  creationDate: PropTypes.any,
  inDelete: PropTypes.bool.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
