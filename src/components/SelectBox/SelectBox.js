import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './SelectBox.styled';

const SelectBox = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>;
};

SelectBox.propTypes = {
  children: PropTypes.node,
};

export default SelectBox;
