import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Button.styled';

const Button = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
