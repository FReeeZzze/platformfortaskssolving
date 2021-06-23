import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './AuthContainer.styled';
import { Form, Formik } from 'formik';
import InputText from 'components/InputText';
import Button from 'components/Button';
import { SocketContext } from 'context/SocketContext';
import { useDispatch } from 'react-redux';
import { setMe } from 'store/thunks/usersThunks';
import getId from 'utils/id';
import authValidate from 'utils/authValidate';

const AuthContainer = ({ onChange }) => {
  const { socket } = React.useContext(SocketContext);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const me = {
      name: `${values.name} ${values.lastName}`,
      id: getId(),
    };
    dispatch(setMe(me));
    socket.emit('auth_user', me);
    onChange(true);
  };

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
        }}
        validate={authValidate}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, values, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <InputText
              name="name"
              type="text"
              label="Имя"
              value={values.name}
              onChange={handleChange}
            />
            <InputText
              name="lastName"
              type="text"
              label="Фамилия"
              value={values.lastName}
              onChange={handleChange}
            />
            <Button type="submit">Войти</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

AuthContainer.propTypes = {
  onChange: PropTypes.func,
};

export default AuthContainer;
