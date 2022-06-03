import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.css';

export const Tag = ({ tagName, tagColor }) => (
  <Badge
    pill
    className="badge"
    bg={tagColor}
    style={{ backgroundColor: tagColor }}
  >
    {tagName}
  </Badge>
);

Tag.propTypes = {
  tagName: PropTypes.string,
  tagColor: PropTypes.string,
};
