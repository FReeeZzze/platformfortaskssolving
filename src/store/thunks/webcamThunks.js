import { actions } from 'store/reducers/webcamReducer';

export const setLive = (live) => (dispatch) => {
  dispatch(actions.setLive(live));
};
