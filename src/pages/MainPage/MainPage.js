import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { wrapComponent } from 'react-snackbar-alert';
import { setLog } from 'store/thunks/loggerThunks';
import { setActive, setLoop } from 'store/thunks/commandsThunks';
import { SocketContext } from 'context/SocketContext';
import { WebCamContainer, SwitchBlock } from './components';
import { MainContainer } from './MainPage.styled';

const MainPage = ({ createSnackbar }) => {
  const dispatch = useDispatch();
  const { socket } = React.useContext(SocketContext);
  const { commands, loop, step } = useSelector((store) => store.commands);

  const showSnackbar = React.useCallback(
    (message, status) => {
      createSnackbar({
        message: message,
        dismissable: false,
        pauseOnHover: true,
        progressBar: true,
        sticky: false,
        theme: ['ok', 'authorized'].includes(status) ? 'success' : 'info',
        timeout: 3000,
      });
    },
    [createSnackbar]
  );

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

      socket.on('alert', (payload) => {
        console.log('alert: ', payload);
        showSnackbar(payload.message, payload.status);
      });
    }
  }, [showSnackbar, dispatch, socket]);

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

MainPage.propTypes = {
  createSnackbar: PropTypes.any,
};

export default wrapComponent(MainPage);
