import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { Container, Label, Input } from './InputText.styled';
import TextError from 'components/TextError';

const InputText = ({ label, name, ...props }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} {...props} />
      <ErrorMessage component={TextError} name={name} />
    </Container>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
};

export default InputText;
