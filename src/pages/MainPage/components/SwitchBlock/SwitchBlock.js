import React from 'react';
import { Container } from './SwitchBlock.styled';
import {
  CommandsContainer,
  LoggerContainer,
  PanelOfCommands,
  TabsContainer,
} from './components';

const SwitchBlock = () => {
  const [tab, setTab] = React.useState(1);
  return (
    <Container>
      <TabsContainer tab={tab} handleActive={setTab} />
      {tab === 1 && <LoggerContainer />}
      {tab === 2 && <PanelOfCommands />}
      {tab === 3 && <CommandsContainer />}
    </Container>
  );
};

export default SwitchBlock;
