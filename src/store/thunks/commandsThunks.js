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

export const setInputValue = (name, value) => (dispatch) => {
  dispatch(actions.setInputValue({ name, value }));
};

export const setActive = (num) => (dispatch) => {
  dispatch(actions.setActive(num));
};

export const setLoop = (isLoop) => (dispatch) => {
  dispatch(actions.setLoop(isLoop));
};

export const setStep = (step) => (dispatch) => {
  dispatch(actions.setStep(step));
};

export const delCommand = (id) => (dispatch) => {
  dispatch(actions.delCommand(id));
};

export const clearCommands = () => (dispatch) => {
  dispatch(actions.clearCommands());
};

export const setSelectedCommands = (commands) => (dispatch) => {
  dispatch(actions.setSelectedCommands(commands));
};
