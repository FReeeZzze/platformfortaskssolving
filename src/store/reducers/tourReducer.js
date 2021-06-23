export const types = {
  SET_TOUR: 'tour/SET_TOUR',
};

const init = {
  isTourOpen: false,
};

export default function tourReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_TOUR:
      return { ...state, isTourOpen: payload };
    default:
      return state;
  }
}

export const actions = {
  setTour: (payload) => ({ type: types.SET_TOUR, payload }),
};
