import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from 'context/SocketContext';
import {
  setCommand,
  delCommand,
  clearCommands,
  setLoop,
  setActive,
  setStep,
  setSelectedCommands,
} from 'store/thunks/commandsThunks';
import { setLog } from 'store/thunks/loggerThunks';
import SelectBox from 'components/SelectBox';
import Button from 'components/Button';
import {
  Option,
  Container,
  ButtonsBox,
  PanelCommands,
} from './CommandsContainer.styled';

const CommandsContainer = () => {
  const [currentIdOption, setCurId] = React.useState(0);
  const [indexElement, setIndex] = React.useState(0);
  const [download, setDownload] = React.useState([]);
  const inputFile = React.useRef({});
  const { socket } = React.useContext(SocketContext);
  const dispatch = useDispatch();
  const { commands, selectedCommands, active, step, stringInput } = useSelector(
    (store) => store.commands
  );

  const onDoubleClick = (e) => {
    const value = JSON.parse(e.target.value).name.replace(/(<=|=>|\s+)/gm, '');
    dispatch(setLog(`<= ${value}`));
    socket.emit('send_data', value);
  };

  const addHandleCommand = () => dispatch(setCommand(stringInput));

  const delHandleCommand = () => dispatch(delCommand(currentIdOption));

  const clearHandleCommand = () => dispatch(clearCommands());

  const turnOnStartLoop = () => {
    dispatch(setLoop(true));
    socket.emit('start_loop', {
      step: step,
      commands: commands,
      index: indexElement,
    });
  };

  const turnOnLoopBegin = () => {
    dispatch(setLoop(true));
    socket.emit('loop_begin', { step: step, commands: commands });
  };

  const turnOffLoop = () => {
    dispatch(setLoop(false));
    socket.emit('stop_loop');
  };

  const turnOnExecute = () => {
    dispatch(setLoop(true));
    socket.emit('execute', {
      step: step,
      commands: commands,
      index: indexElement,
    });
  };

  const handleChangeFile = (input) => {
    if (input.target.files[0]) {
      let file = input.target.files[0];

      let reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function () {
        reader.result.split('\n').forEach((el) => {
          dispatch(setCommand(el.replace(/(;|\/\/).*/gm, '')));
        });
      };

      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  };

  React.useEffect(() => {
    setDownload([]);
    commands.forEach((command) => {
      setDownload((prev) => [...prev, `${command.name}\n`]);
    });
  }, [commands]);

  const handleSelectValues = (e) => {
    dispatch(
      setSelectedCommands(
        Array.from(e.target.selectedOptions, (option) => option.value)
      )
    );
  };
  const handleReadFile = () => inputFile.current.click();
  const nodes = React.useMemo(() => new Map(), []);

  React.useEffect(() => {
    Array.from(nodes)
      .filter((node) => node != null)
      .forEach((item) => {
        if (item[0] === active) {
          item[1].selected = true;
        }
      });
  }, [active, nodes]);

  return (
    <Container data-guid="list-commands">
      <SelectBox
        value={selectedCommands}
        onChange={handleSelectValues}
        multiple
      >
        {commands.map((command, index) => (
          <Option
            ref={(n) => nodes.set(index, n)}
            key={`index${command.id}`}
            onClick={() => {
              dispatch(setActive(index));
              setIndex(index);
              setCurId(command.id);
            }}
            onDoubleClick={onDoubleClick}
            value={JSON.stringify(command)}
          >
            {command.name}
          </Option>
        ))}
      </SelectBox>
      <PanelCommands>
        <div>
          <label type="text" htmlFor="step">
            Шаг (ms):{' '}
          </label>
          <input
            type="number"
            name="step"
            value={step}
            onChange={(e) => dispatch(setStep(e.target.value))}
          />
          <input
            ref={inputFile}
            type="file"
            name="Прочитать"
            onChange={handleChangeFile}
            style={{ display: 'none' }}
          />
        </div>
        <ButtonsBox>
          <Button onClick={addHandleCommand}>Вставить</Button>
          <Button onClick={delHandleCommand}>Удалить</Button>
          <Button onClick={clearHandleCommand}>Очистить</Button>
          <Button onClick={turnOnExecute}>Выполнить</Button>
          <Button onClick={turnOnLoopBegin}>Цикл</Button>
          <Button onClick={turnOnStartLoop}>Старт</Button>
          <Button onClick={turnOffLoop}>Стоп</Button>
          <a
            href={`data:text/plain;charset=utf-8,%EF%BB%BF${encodeURIComponent(
              download.toString().replace(/,/gm, '')
            )}`}
            download="download.txt"
          >
            <Button>Записать</Button>
          </a>
          <Button onClick={handleReadFile}>Прочитать</Button>
        </ButtonsBox>
      </PanelCommands>
    </Container>
  );
};

export default CommandsContainer;
