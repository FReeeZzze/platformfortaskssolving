const validate = (values) => {
  const errors = {};
  const messages = {
    default: '* Обязательное поле*',
    oneOf: '* Заполните одно из обязательных полей*',
    numbers: '* Допустимы только цифры',
    ram: '* только в шестнадцетиричной системе от 100 - 300',
    operand: '* только в диапозоне от 1 - 255 (01 - FF)',
  };

  const onlyNumbers = (value) => /\D+/gm.test(value);

  const operandValid = (value) =>
    value < 1 || value > 255 || !/[0-9a-fA-F][0-9a-fA-F]/gm.test(value);

  const ramValid = (value) =>
    parseInt(value, 10) > 300 || parseInt(value, 10) < 100;

  if (!values.stringInput) {
    errors.stringInput = messages.default;
  }

  if (!values.operand) {
    errors.operand = messages.default;
  }

  if (!values.ram) {
    errors.ram = messages.default;
  }

  if (operandValid(values.operand)) {
    errors.operand = messages.operand;
  }

  if (!values.ram && !values.portInput) {
    errors.ram = messages.oneOf;
    errors.portInput = messages.oneOf;
  }

  if (onlyNumbers(values.ram)) {
    errors.ram = messages.numbers;
  }

  if (ramValid(values.ram)) {
    errors.ram = messages.ram;
  }

  return errors;
};

export default validate;
