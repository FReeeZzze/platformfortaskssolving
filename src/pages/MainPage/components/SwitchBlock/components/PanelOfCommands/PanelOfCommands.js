import React from 'react';
import CommandsForm from './components/CommandsForm';
import { Container } from './PanelOfCommands.styled';

const PanelOfCommands = () => {
  return (
    <Container data-guid="form-commands">
      <CommandsForm />
    </Container>
  );
};

export default PanelOfCommands;
