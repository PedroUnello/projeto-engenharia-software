import React from 'react';
import { Col, Image, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ProjectButton = ({
  //Project list page, topbar buttons
  clickFunc,
  imageSrc,
  imageAlt,
  buttonLabel,
}) => (
  <Col>
    <Row>
      <Col>
        <Button
          onClick={clickFunc}
          variant="link"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Image src={imageSrc} alt={imageAlt} style={{ width: 50 }} />
        </Button>
      </Col>
      <Col>
        <h3 style={{ marginTop: 10, marginLeft: -30 }}>{buttonLabel}</h3>
      </Col>
    </Row>
  </Col>
);

ProjectButton.propTypes = {
  clickFunc: PropTypes.func,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  buttonLabel: PropTypes.string,
};
