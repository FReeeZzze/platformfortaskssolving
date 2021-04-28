import { combineReducers } from 'redux';

import commandsReducer from './commandsReducer';
import loggerReducer from './loggerReducer';
import webCamReducer from './webcamReducer';

const appReducer = combineReducers({
  commands: commandsReducer,
  logger: loggerReducer,
  webcam: webCamReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // eslint-disable-next-line
    state = null;
  }

  return appReducer(state, action);
};

export default rootReducer;
