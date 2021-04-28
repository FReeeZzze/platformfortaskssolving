import React from 'react';
import { WebCamContainer, SwitchBlock } from './components';
import { MainContainer } from './MainPage.styled';
import { setLog } from 'store/thunks/loggerThunks';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from 'context/SocketContext';
import { setActive, setLoop } from 'store/thunks/commandsThunks';

const MainPage = () => {
  const dispatch = useDispatch();
  const { socket } = React.useContext(SocketContext);
  const { commands, loop, step } = useSelector((store) => store.commands);

  React.useEffect(() => {
    if (socket) {
      socket.on('result', (payload) => {
        console.log('response: ', payload);
        if (payload.message) {
          dispatch(setLog(`=> ${payload.message}`));
        }
        if (payload.cancel) {
          setTimeout(() => dispatch(setLoop(false)), 1000);
        }
      });
    }
  }, [dispatch, socket]);

  const timerId = React.useRef({});

  React.useEffect(() => {
    if (loop && commands.length) {
      let index = 0;
      timerId.current = setInterval(() => {
        dispatch(setActive(index));
        dispatch(setLog(`<= ${commands[index].name}`));
        if (index !== commands.length - 1) {
          index += 1;
        } else index = 0;
      }, +step + 300);
    } else if (socket) {
      dispatch(setLoop(false));
      socket.emit('stop_loop');
    }
    return () => {
      if (timerId) {
        clearInterval(timerId.current);
      }
    };
  }, [socket, commands, dispatch, loop, step]);

  return (
    <MainContainer>
      <WebCamContainer />
      <SwitchBlock />
    </MainContainer>
  );
};

export default MainPage;
