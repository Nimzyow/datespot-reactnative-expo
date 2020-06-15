import * as types from "../actions/types";

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
