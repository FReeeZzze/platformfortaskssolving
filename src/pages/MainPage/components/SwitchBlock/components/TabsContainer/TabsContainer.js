import React from 'react';
import { func, number } from 'prop-types';
import { Container } from './TabsContainer.styled';
import TabButton from './components/TabButton';

const TabsContainer = ({ handleActive, tab }) => {
  return (
    <Container>
      <TabButton active={tab === 1} onClick={() => handleActive(1)}>
        Логгер
      </TabButton>
      <TabButton active={tab === 2} onClick={() => handleActive(2)}>
        Панель комманд
      </TabButton>
      <TabButton active={tab === 3} onClick={() => handleActive(3)}>
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
