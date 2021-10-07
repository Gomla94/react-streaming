import { combineReducers } from "redux";

const AUTH_INIT = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = AUTH_INIT, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
export default combineReducers({
  auth: authReducer,
});
