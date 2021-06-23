import { combineReducers } from 'redux';

import commandsReducer from './commandsReducer';
import loggerReducer from './loggerReducer';
import webCamReducer from './webcamReducer';
import tourReducer from './tourReducer';
import usersReducer from './usersReducer';

const appReducer = combineReducers({
  commands: commandsReducer,
  logger: loggerReducer,
  webcam: webCamReducer,
  tour: tourReducer,
  users: usersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // eslint-disable-next-line
    state = null;
  }

  return appReducer(state, action);
};

export default rootReducer;
