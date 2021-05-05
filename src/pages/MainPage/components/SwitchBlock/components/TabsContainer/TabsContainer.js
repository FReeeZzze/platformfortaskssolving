import React from 'react';
import { func, number } from 'prop-types';
import { Container } from './TabsContainer.styled';
import TabButton from './components/TabButton';

const TabsContainer = ({ handleActive, tab }) => {
  return (
    <Container data-guid="switcher">
      <TabButton active={tab === 0} onClick={() => handleActive(0)}>
        Панель комманд
      </TabButton>
      <TabButton active={tab === 1} onClick={() => handleActive(1)}>
        Список комманд
      </TabButton>
    </Container>
  );
};

TabsContainer.propTypes = {
  handleActive: func,
  tab: number,
};

export default TabsContainer;
