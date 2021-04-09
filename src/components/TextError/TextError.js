import React from 'react';
import { string } from 'prop-types';
import { Container } from './TextError.styled';

const TextError = (props) => {
  return <Container>{props.children}</Container>;
};

TextError.propTypes = {
  children: string,
};

export default TextError;
