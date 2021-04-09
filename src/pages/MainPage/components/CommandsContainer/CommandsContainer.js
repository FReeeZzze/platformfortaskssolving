import React from 'react';
import { Container, ButtonsBox } from './CommandsContainer.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCommand,
  delCommand,
  clearCommands,
} from 'store/thunks/commandsThunks';
import { ShareContext } from 'context/ShareContext';
import SelectBox from 'components/SelectBox';
import Button from 'components/Button';
import { setLog } from 'store/thunks/loggerThunks';
import { SocketContext } from 'context/SocketContext';

const CommandsContainer = () => {
  const [currentIdOption, setCurId] = React.useState(0);
  const [indexElement, setIndex] = React.useState(0);
  const [loop, setLoop] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [step, setStep] = React.useState('500');
  const { stringInput } = React.useContext(ShareContext);
  const { commands } = useSelector((store) => store.commands);
  const dispatch = useDispatch();
  const { socket } = React.useContext(SocketContext);

  const onDoubleClick = (e) => {
    const value = e.target.value.replace(/(<=|=>|\s+)/gm, '');
    dispatch(setLog(`<= ${value}`));
    socket.emit('send_data', value);
  };

  const addHandleCommand = () => dispatch(setCommand(stringInput));

  const delHandleCommand = () => dispatch(delCommand(currentIdOption));

  const clearHandleCommand = () => dispatch(clearCommands());

  const turnOnStartLoop = () => {
    socket.emit('start_loop', {
      step: step,
      commands: commands,
      index: indexElement,
    });
    setLoop(true);
  };

  const turnOnLoopBegin = () => {
    socket.emit('loop_begin', { step: step, commands: commands });
    setLoop(true);
  };

  const turnOffLoop = () => {
    socket.emit('stop_loop');
    setLoop(false);
  };

  const turnOnExecute = () => {
    socket.emit('execute', {
      step: step,
      commands: commands,
      index: indexElement,
    });
    setLoop(true);
  };

  const timerId = React.useRef({});
  const selectRef = React.useRef({});

  // React.useEffect(() => {
  //   if (loop && socket) {
  //     timerId.current = setInterval(() => {
  //       socket.emit('message');
  //     }, +step);
  //   }
  //   return () => {
  //     if (timerId.current) {
  //       clearInterval(timerId);
  //     }
  //   };
  // }, [loop, step, socket, timerId]);

  return (
    <Container>
      <SelectBox multiple>
        {commands.map((command, index) => (
          <option
            key={`index${command.id}`}
            ref={(ref) => (selectRef.current = ref)}
            onClick={() => {
              setIndex(index);
              setCurId(command.id);
            }}
            onDoubleClick={onDoubleClick}
          >
            {command.name}
          </option>
        ))}
      </SelectBox>
      <div>
        <lable>Шаг (ms): </lable>
        <input value={step} onChange={(e) => setStep(e.target.value)} />
      </div>
      <ButtonsBox>
        <Button onClick={addHandleCommand}>Вставить</Button>
        <Button onClick={delHandleCommand}>Удалить</Button>
        <Button onClick={clearHandleCommand}>Очистить</Button>
        <Button onClick={turnOnExecute}>Выполнить</Button>
        <Button onClick={turnOnLoopBegin}>Цикл</Button>
        <Button onClick={turnOnStartLoop}>Старт</Button>
        <Button onClick={turnOffLoop}>Стоп</Button>
      </ButtonsBox>
    </Container>
  );
};

export default CommandsContainer;
