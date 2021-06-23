const authValidate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Введите имя';
  }

  if (!values.lastName) {
    errors.lastName = 'Введите фамилию';
  }

  return errors;
};

export default authValidate;
