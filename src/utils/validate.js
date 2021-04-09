const validate = (values) => {
  const errors = {};
  const messages = {
    standart: 'Обязательное поле*',
    oneOf: 'Заполните одно из обязательных полей*',
    numbers: 'Допустимы только цифры',
  };
  const onlyNumbers = (value) => value.match(/\D+/gim)?.length > 0;
  if (!values.stringInput) {
    errors.stringInput = messages.standart;
  }

  if (!values.operand) {
    errors.operand = messages.standart;
  }

  if (!values.register && !values.ram && !values.portInput) {
    errors.register = messages.oneOf;
    errors.ram = messages.oneOf;
    errors.portInput = messages.oneOf;
  } else if (onlyNumbers(values.register)) {
    errors.register = messages.numbers;
  } else if (onlyNumbers(values.ram)) {
    errors.ram = messages.numbers;
  }

  return errors;
};

export default validate;
