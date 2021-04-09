import React from 'react';
import {
  LoggerContainer,
  WebCamContainer,
  PanelOfCommands,
  CommandsContainer,
} from './components';
import { MainContainer } from './MainPage.styled';
import { setLog } from 'store/thunks/loggerThunks';
import { useDispatch } from 'react-redux';
import { SocketContext } from 'context/SocketContext';

const MainPage = () => {
  const dispatch = useDispatch();
  const { socket } = React.useContext(SocketContext);

  React.useEffect(() => {
    if (socket) {
      socket.on('result', (payload) => {
        console.log('response: ', payload);
        if (payload.message) {
          dispatch(setLog(`=> ${payload.message}`));
        }
      });

      socket.on('response', (payload) => {
        console.log('response: ', payload);
      });
    }
  }, [dispatch, socket]);

  return (
    <MainContainer>
      <WebCamContainer />
      <LoggerContainer />
      <PanelOfCommands />
      <CommandsContainer />
    </MainContainer>
  );
};

export default MainPage;
