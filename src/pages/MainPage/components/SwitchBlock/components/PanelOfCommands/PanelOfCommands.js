import React from 'react';
import CommandsForm from './components/CommandsForm';
import { Container } from './PanelOfCommands.styled';

const PanelOfCommands = () => {
  return (
    <Container>
      <CommandsForm />
    </Container>
  );
};

export default PanelOfCommands;
