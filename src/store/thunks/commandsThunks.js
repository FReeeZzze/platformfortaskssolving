import { actions } from 'store/reducers/commandsReducer';
import getId from 'utils/id';

export const setCommand = (command) => (dispatch) => {
  dispatch(
    actions.setCommand({
      id: getId(),
      name: command,
    })
  );
};

export const delCommand = (id) => (dispatch) => {
  dispatch(actions.delCommand(id));
};

export const clearCommands = () => (dispatch) => {
  dispatch(actions.clearCommands());
};
