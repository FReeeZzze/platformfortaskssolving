export const types = {
  SET_LIVE: 'webcam/SET_LIVE',
};

const init = {
  isLive: false,
};

export default function webCamReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_LIVE:
      return { ...state, isLive: payload };
    default:
      return state;
  }
}

export const actions = {
  setLive: (live) => ({ type: types.SET_LIVE, payload: live }),
};
