import authReducer from "./authReducer";
import * as types from "../actions/types";
describe("authReducer", () => {
  it("returns state on unrelated action", () => {
    const nonsenseState = { something: "something" };
    const nonsenseAction = { type: "nonsense", payload: "laughable" };
    expect(authReducer(nonsenseState, nonsenseAction)).toBe(nonsenseState);
  });
  it("calls REGISTER_SUCCESS action", () => {
    const expectedState = {
      token: "token",
      isAuthenticated: true,
    };
    const action = {
      type: types.REGISTER_SUCCESS,
      payload: expectedState.token,
    };
    expect(authReducer(undefined, action)).toEqual(expectedState);
  });
  it("calls REGISTER_FAIL action", () => {
    const initialState = {
      token: "greatestTokenEver",
      isAuthenticated: true,
    };

    const expectedState = {
      token: null,
      isAuthenticated: false,
    };
    const action = {
      type: types.REGISTER_FAIL,
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });
});
