import { actions } from 'store/reducers/usersReducer';

export const setMe = (user) => (dispatch) => {
  dispatch(actions.setMe(user));
};

export const setWorker = (worker) => (dispatch) => {
  dispatch(actions.setWorker(worker));
};

export const setUsers = (users) => (dispatch) => {
  dispatch(actions.setUsers(users));
};
