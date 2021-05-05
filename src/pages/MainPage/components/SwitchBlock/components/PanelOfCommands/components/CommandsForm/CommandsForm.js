import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { setLog } from 'store/thunks/loggerThunks';
import { setInputValue } from 'store/thunks/commandsThunks';
import { SocketContext } from 'context/SocketContext';
import validate from 'utils/validate';
import ports from 'constants/ports';
import commands from 'constants/commands';
import commentsCommands from 'constants/commentsCommands';
import InputText from 'components/InputText';
import FieldSelect from 'components/FieldSelect';
import Button from 'components/Button';
import { ButtonsBox } from './CommandsForm.styled';

const CommandsForm = () => {
  const [oneOf, setOneOf] = React.useState({ value: '0180', name: 'RAM' });
  const { socket } = React.useContext(SocketContext);
  const {
    stringInput,
    command,
    register,
    ram,
    portInput,
    operand,
    comment,
  } = useSelector((store) => store.commands);
  const dispatch = useDispatch();

  const OutPutCommandString = (command, oneOf, operand, comment) => {
    const Exceptions = ['g', 'r'];
    if (Exceptions.includes(command)) {
      return `${command} ;${comment}`;
    }
    return `${command}${oneOf.value}${operand} ;${comment} из ${oneOf.name} - ${oneOf.value} с операндом - ${operand}`;
  };

  const getObjByField = (field, value) => {
    if (field.includes('register')) {
      return { value, name: 'регистра' };
    } else if (field.includes('ram')) {
      return { value, name: 'RAM' };
    }
    return {
      value,
      name: 'Порта',
    };
  };

  const handleChangeField = (target, setFieldValue, values) => {
    const field = target.name;
    const value = target.value;
    setFieldValue(field, value);
    dispatch(setInputValue(field, value));
    let temp = OutPutCommandString(
      values.command,
      getObjByField(field, value),
      values.operand,
      commentsCommands[values.command]
    );
    switch (field) {
      case 'command':
        temp = OutPutCommandString(
          value,
          oneOf,
          values.operand,
          commentsCommands[value]
        );
        break;
      case 'operand':
        temp = OutPutCommandString(
          values.command,
          oneOf,
          value,
          commentsCommands[values.command]
        );
        break;
      case 'comment':
        temp = OutPutCommandString(
          values.command,
          oneOf,
          values.operand,
          value
        );
        break;
      default:
        setOneOf(getObjByField(field, value));
        break;
    }
    setFieldValue('stringInput', temp);
    dispatch(setInputValue('stringInput', temp));
  };

  const handleSubmit = (values) => {
    dispatch(setLog(`<= ${values.stringInput}`));
    socket.emit('send_message', values.stringInput);
  };

  const registers = React.useMemo(
    () =>
      Array.from(Array(26).keys()).map((i) => {
        const str = i.toString(16);
        return str.length > 1 ? `00${str}` : `000${str}`;
      }),
    []
  );

  return (
    <Formik
      initialValues={{
        stringInput,
        command,
        register,
        ram,
        portInput,
        operand,
        comment,
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <InputText
            dataGuid="form-stringInput"
            name="stringInput"
            type="text"
            label="Строка ввода:"
            value={values.stringInput}
            disabled
          />
          <FieldSelect
            dataGuid="form-register"
            name="register"
            label="Регистр:"
            onChange={(e) => handleChangeField(e.target, setFieldValue, values)}
            options={{ ...registers }}
          />
          <InputText
            dataGuid="form-ram"
            name="ram"
            type="text"
            label="Адресс RAM:"
            value={values.ram}
            onChange={(e) => handleChangeField(e.target, setFieldValue, values)}
          />
          <InputText
            dataGuid="form-operand"
            name="operand"
            type="text"
            label="Операнд:"
            value={values.operand}
            onChange={(e) => handleChangeField(e.target, setFieldValue, values)}
          />
          <FieldSelect
            dataGuid="form-command"
            name="command"
            label="Комманда:"
            onChange={(e) => handleChangeField(e.target, setFieldValue, values)}
            options={commands}
          />
          <FieldSelect
            dataGuid="form-portInput"
            name="portInput"
            label="Порты:"
            onChange={(e) => handleChangeField(e.target, setFieldValue, values)}
            options={ports}
          />
          <InputText
            dataGuid="form-comment"
            name="comment"
            type="text"
            label="Комментарий:"
            value={values.comment}
            onChange={(e) => handleChangeField(e.target, setFieldValue, values)}
          />
          <ButtonsBox>
            <Button type="reset">Очистить</Button>
            <Button type="submit">Отправить</Button>
          </ButtonsBox>
        </Form>
      )}
    </Formik>
  );
};

export default CommandsForm;
