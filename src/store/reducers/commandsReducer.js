export const types = {
  SET_COMMAND: 'commands/SET_COMMAND',
  DEL_COMMAND: 'commands/DEL_COMMAND',
  SET_COMMANDS: 'commands/SET_COMMANDS',
  CLEAR_COMMANDS: 'commands/CLEAR_COMMANDS',
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
};

export default function CommandsReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_COMMAND:
      return { ...state, commands: [...state.commands, payload] };
    case types.DEL_COMMAND:
      return {
        ...state,
        commands: state.commands.filter((command) => payload !== command.id),
      };
    case types.SET_COMMANDS:
      return { ...state, commands: payload };
    case types.CLEAR_COMMANDS:
      return { ...state, commands: [] };
    default:
      return state;
  }
}

export const actions = {
  setCommands: (commands) => ({ type: types.SET_COMMANDS, payload: commands }),
  setCommand: (command) => ({ type: types.SET_COMMAND, payload: command }),
  clearCommands: () => ({ type: types.CLEAR_COMMANDS }),
  delCommand: (id) => ({ type: types.DEL_COMMAND, payload: id }),
};
