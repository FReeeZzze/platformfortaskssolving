import React from 'react';
import { Container } from './LoggerContainer.styled';
import SelectBox from 'components/SelectBox';
import { useDispatch, useSelector } from 'react-redux';
import { setLog, clearLogs } from 'store/thunks/loggerThunks';
import { SocketContext } from 'context/SocketContext';

const LoggerContainer = () => {
  const { logger } = useSelector((store) => store.logger);
  const dispatch = useDispatch();
  const { socket } = React.useContext(SocketContext);

  const onDoubleClick = (e) => {
    if (e.target.value.match(/=>/gm, '')?.length) return;
    const value = e.target.value.replace(/(<=|=>|\s+)/gm, '');
    dispatch(setLog(`<= ${value}`));
    socket.emit('send_data', value);
  };

  return (
    <Container data-guid="logger">
      <SelectBox multiple>
        {logger.map((log) => (
          <option key={`index${log.id}`} onDoubleClick={onDoubleClick}>
            {log.name}
          </option>
        ))}
      </SelectBox>
      {/*<Button onClick={() => dispatch(clearLogs())}>Очистить</Button>*/}
    </Container>
  );
};

export default LoggerContainer;
