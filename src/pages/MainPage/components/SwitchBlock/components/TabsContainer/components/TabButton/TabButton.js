import React from 'react';
import { func, bool, string } from 'prop-types';
import { Container } from './TabButton.styled';

const TabButton = ({ onClick, active, children }) => {
  return (
    <Container active={active} onClick={onClick}>
      <span>{children}</span>
    </Container>
  );
};

TabButton.defaultProps = {
  onClick: () => {},
  active: false,
};

TabButton.propTypes = {
  onClick: func,
  active: bool,
  children: string,
};

export default TabButton;
