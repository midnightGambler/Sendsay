const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return [...state, action.message];
    default:
      return state;
  }
};
