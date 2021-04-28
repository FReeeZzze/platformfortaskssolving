import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { setLog } from 'store/thunks/loggerThunks';
import commands from 'constants/commands';
import ports from 'constants/ports';
import validate from 'utils/validate';
import InputText from 'components/InputText';
import FieldSelect from 'components/FieldSelect';
import Button from 'components/Button';
import { SocketContext } from 'context/SocketContext';
import { ButtonsBox } from './CommandsForm.styled';
import { setInputValue } from 'store/thunks/commandsThunks';

const CommandsForm = () => {
  const [oneOf, setOneOf] = React.useState('0180');
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

  const handleChangeField = (setFieldValue, field, value, values) => {
    setFieldValue(field, value);
    dispatch(setInputValue(field, value));
    let temp = `${values.command}${value}${values.operand} ;${values.comment}`;
    switch (field) {
      case 'command':
        temp = `${value}${oneOf}${values.operand}  ;${values.comment}`;
        break;
      case 'operand':
        temp = `${values.command}${oneOf}${value}  ;${values.comment}`;
        break;
      case 'comment':
        temp = `${values.command}${oneOf}${values.operand}  ;${value}`;
        break;
      default:
        setOneOf(value);
        break;
    }
    setFieldValue('stringInput', temp);
    dispatch(setInputValue('stringInput', temp));
  };

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
      onSubmit={(values) => {
        dispatch(setLog(`<= ${values.stringInput}`));
        socket.emit('send_data', values.stringInput);
      }}
    >
      {({ handleSubmit, values, resetForm, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <InputText
            name="stringInput"
            type="text"
            label="Строка ввода:"
            value={values.stringInput}
            disabled
          />
          <FieldSelect
            name="register"
            label="Регистр:"
            onChange={(e) => {
              handleChangeField(
                setFieldValue,
                'register',
                e.target.value,
                values
              );
            }}
            options={{
              ...Array.from(Array(26).keys()).map((i) => {
                const str = i.toString(16);
                return str.length > 1 ? `00${str}` : `000${str}`;
              }),
            }}
          />
          <InputText
            name="ram"
            type="text"
            label="Адресс RAM:"
            value={values.ram}
            onChange={(e) => {
              handleChangeField(setFieldValue, 'ram', e.target.value, values);
            }}
          />
          <InputText
            name="operand"
            type="text"
            label="Операнд:"
            value={values.operand}
            onChange={(e) => {
              handleChangeField(
                setFieldValue,
                'operand',
                e.target.value,
                values
              );
            }}
          />
          <FieldSelect
            name="command"
            label="Комманда:"
            onChange={(e) => {
              handleChangeField(
                setFieldValue,
                'command',
                e.target.value,
                values
              );
            }}
            options={commands}
          />
          <FieldSelect
            name="portInput"
            label="Порты:"
            onChange={(e) => {
              handleChangeField(
                setFieldValue,
                'portInput',
                e.target.value,
                values
              );
            }}
            options={ports}
          />
          <InputText
            name="comment"
            type="text"
            label="Комментарий:"
            value={values.comment}
            onChange={(e) => {
              handleChangeField(
                setFieldValue,
                'comment',
                e.target.value,
                values
              );
            }}
          />
          <ButtonsBox>
            <Button
              type="reset"
              onClick={() => {
                resetForm();
                dispatch(
                  setInputValue('stringInput', `${commands['read_memo']}018010`)
                );
              }}
            >
              Очистить
            </Button>
            <Button type="submit">Отправить</Button>
          </ButtonsBox>
        </Form>
      )}
    </Formik>
  );
};

export default CommandsForm;
