import { actions } from 'store/reducers/loggerReducer';
import getId from 'utils/id';

export const setLog = (log) => (dispatch) => {
  dispatch(
    actions.setLog({
      id: getId(),
      name: log,
    })
  );
};

export const clearLogs = () => (dispatch) => {
  dispatch(actions.clearLogs());
};
