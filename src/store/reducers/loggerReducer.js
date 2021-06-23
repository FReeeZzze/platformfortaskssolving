export const types = {
  SET_LOG: 'logger/SET_LOG',
  CLEAR_LOGS: 'logger/CLEAR_LOGS',
};

const init = {
  logger: [],
};

export default function loggerReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_LOG:
      return { ...state, logger: [...state.logger, payload] };
    case types.CLEAR_LOGS:
      return { ...state, logger: [] };
    default:
      return state;
  }
}

export const actions = {
  setLog: (log) => ({ type: types.SET_LOG, payload: log }),
  clearLogs: () => ({ type: types.CLEAR_LOGS }),
};
