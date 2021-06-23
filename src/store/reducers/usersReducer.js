export const types = {
  SET_USERS: 'users/SET_USERS',
  SET_USER: 'users/SET_USER',
  SET_WORKER: 'users/SET_WORKER',
  SET_ME: 'users/SET_ME',
  CLEAR_USERS: 'users/CLEAR_USERS',
  DEL_USER: 'users/DEL_USER',
};

const init = {
  users: [],
  worker: null,
  me: null,
};

export default function usersReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_USERS:
      return { ...state, users: payload };
    case types.SET_USER:
      return { ...state, users: [...state.users, payload] };
    case types.CLEAR_USERS:
      return { ...state, users: [] };
    case types.DEL_USER:
      return { ...state, users: state.filter((user) => user !== payload) };
    case types.SET_WORKER:
      return { ...state, worker: payload };
    case types.SET_ME:
      return { ...state, me: payload, users: [...state.users, payload] };
    default:
      return state;
  }
}

export const actions = {
  setUser: (user) => ({ type: types.SET_USER, payload: user }),
  setUsers: (users) => ({ type: types.SET_USERS, payload: users }),
  delUser: (id) => ({ type: types.DEL_USER, payload: id }),
  clearUsers: () => ({ type: types.CLEAR_USERS }),
  setWorker: (worker) => ({ type: types.SET_WORKER, payload: worker }),
  setMe: (me) => ({ type: types.SET_ME, payload: me }),
};
