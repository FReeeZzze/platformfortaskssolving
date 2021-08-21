import React from 'react';
import { object, string } from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { Container } from './FieldSelect.styled';
import TextError from 'components/TextError';

const FieldSelect = ({ options, label, name, dataGuid, ...props }) => {
  return (
    <Container data-guid={dataGuid}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} {...props}>
        {Object.keys(options).map((option) => (
          <option key={`key:${option}`} value={options[option]}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </Container>
  );
};

FieldSelect.defaultProps = {
  options: {},
  label: '',
  name: '',
  dataGuid: '',
};

FieldSelect.propTypes = {
  label: string,
  dataGuid: string,
  name: string,
  options: object,
};

export default FieldSelect;
