import React from 'react';
import { Container } from './SwitchBlock.styled';
import {
  CommandsContainer,
  PanelOfCommands,
  TabsContainer,
} from './components';
import { TabContext } from 'context/TabContext';

const SwitchBlock = () => {
  const { tab, setTab } = React.useContext(TabContext);

  return (
    <Container>
      <TabsContainer tab={tab} handleActive={setTab} />
      {tab === 0 && <PanelOfCommands />}
      {tab === 1 && <CommandsContainer />}
    </Container>
  );
};

export default SwitchBlock;
