import { combineReducers } from 'redux';

import commandsReducer from './commandsReducer';
import loggerReducer from './loggerReducer';

const appReducer = combineReducers({
  commands: commandsReducer,
  logger: loggerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // eslint-disable-next-line
    state = null;
  }

  return appReducer(state, action);
};

export default rootReducer;
