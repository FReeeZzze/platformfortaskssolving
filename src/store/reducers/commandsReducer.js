export const types = {
  SET_COMMAND: 'commands/SET_COMMAND',
  DEL_COMMAND: 'commands/DEL_COMMAND',
  CLEAR_COMMANDS: 'commands/CLEAR_COMMANDS',
  SET_ACTIVE: 'commands/SET_ACTIVE',
  SET_STEP: 'commands/SET_STEP',
  SET_LOOP: 'commands/SET_LOOP',
  SET_INPUT_FORM_VALUE: 'commands/SET_INPUT_FORM_VALUE',
  SET_SELECTED_COMMANDS: 'commands/SET_SELECTED_COMMANDS',
};

const init = {
  commands: [
    {
      id: 'f17851476616',
      name: 'b01501F',
    },
    {
      id: 'f17851476dd5',
      name: 'm015008',
    },
  ],
  selectedCommands: [],
  stringInput: 'm018010  ;прочитать память из RAM - 0180 с операндом - 10',
  command: 'm',
  register: '',
  ram: '0180',
  portInput: '',
  operand: '10',
  comment: 'read_memo 018010',
  active: 0,
  step: '500',
  loop: false,
};

export default function CommandsReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_SELECTED_COMMANDS:
      return {
        ...state,
        selectedCommands: payload,
      };
    case types.SET_INPUT_FORM_VALUE:
      return { ...state, [payload.name]: payload.value };
    case types.SET_ACTIVE:
      return { ...state, active: payload };
    case types.SET_STEP:
      return { ...state, step: payload };
    case types.SET_LOOP:
      return { ...state, loop: payload };
    case types.SET_COMMAND:
      return { ...state, commands: [...state.commands, payload] };
    case types.DEL_COMMAND:
      return {
        ...state,
        commands: state.commands.filter((command) => payload !== command.id),
      };
    case types.CLEAR_COMMANDS:
      return { ...state, commands: [] };
    default:
      return state;
  }
}

export const actions = {
  setSelectedCommands: (commands) => ({
    type: types.SET_SELECTED_COMMANDS,
    payload: commands,
  }),
  setCommand: (command) => ({ type: types.SET_COMMAND, payload: command }),
  clearCommands: () => ({ type: types.CLEAR_COMMANDS }),
  delCommand: (id) => ({ type: types.DEL_COMMAND, payload: id }),
  setActive: (num) => ({ type: types.SET_ACTIVE, payload: num }),
  setStep: (step) => ({ type: types.SET_STEP, payload: step }),
  setLoop: (isLoop) => ({ type: types.SET_LOOP, payload: isLoop }),
  setInputValue: (payload) => ({ type: types.SET_INPUT_FORM_VALUE, payload }),
};
