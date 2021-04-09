import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { setLog } from 'store/thunks/loggerThunks';
import commands from 'constants/commands';
import ports from 'constants/ports';
import validate from 'utils/validate';
import InputText from 'components/InputText';
import FieldSelect from 'components/FieldSelect';
import Button from 'components/Button';
import { ShareContext } from 'context/ShareContext';
import { SocketContext } from 'context/SocketContext';
import { ButtonsBox } from './CommandsForm.styled';

const CommandsForm = () => {
  const [oneOf, setOneOf] = React.useState('0180');
  const { setString } = React.useContext(ShareContext);
  const { socket } = React.useContext(SocketContext);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setString(`${commands['read_memo']}018010`);
  }, [setString]);

  const handleChangeField = (setFieldValue, field, value, values) => {
    setFieldValue(field, value);
    let temp = `${values.command}${value}${values.operand}`;
    switch (field) {
      case 'command':
        temp = `${value}${oneOf}${values.operand}`;
        break;
      case 'operand':
        temp = `${values.command}${oneOf}${value}`;
        break;
      default:
        setOneOf(value);
        break;
    }
    setFieldValue('stringInput', temp);
    setString(temp);
  };

  return (
    <Formik
      initialValues={{
        stringInput: `${commands['read_memo']}018010`,
        command: commands['read_memo'],
        register: '',
        ram: '0180',
        portInput: '',
        operand: '10',
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
          <InputText
            name="register"
            type="text"
            label="Регистр:"
            value={values.register}
            onChange={(e) => {
              handleChangeField(
                setFieldValue,
                'register',
                e.target.value,
                values
              );
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
          <ButtonsBox>
            <Button
              type="reset"
              onClick={() => {
                resetForm();
                setString(`${commands['read_memo']}018010`);
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
