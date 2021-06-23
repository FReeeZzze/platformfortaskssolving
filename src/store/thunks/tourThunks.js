import { actions } from 'store/reducers/tourReducer';

export const setTour = (isTourOpen) => (dispatch) => {
  dispatch(actions.setTour(isTourOpen));
};
