const data = {
  user: null
};

export const userReducer = (state = data, action) => {
  switch (action.type) {
    case "LOG_IN":
      state.user = action.payload;
      return state
    case "LOG_OUT":
      state.user = null;
      return state
    default:
      return state;
  }
};

export const logIn = (user) => {
  return { type: "LOG_IN", payload: user };
};

export const logOut = () => {
  return { type: "LOG_OUT" };
};
