import { registerUser } from "./auth";
import mockAxios from "axios";
import * as Types from "./types";
jest.mock("axios");

describe("authActions", () => {
  let dispatch = jest.fn();
  let user;
  beforeEach(() => {
    jest.clearAllMocks();
    user = { username: "testy", email: "test@test.com", password: "123456" };
  });
  it("REGISTER_SUCCESS is called on succesfull registeration of user", async () => {
    mockAxios.post.mockImplementationOnce(
      async () =>
        await Promise.resolve({
          data: { token: "greatestTokenInTheUniverse" },
        }),
    );
    try {
      const response = await registerUser(user);

      await response(dispatch);

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith(
        "http://localhost:4000/api/users",
        user,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      expect(dispatch).toHaveBeenCalledWith({
        type: Types.REGISTER_SUCCESS,
        payload: { token: "greatestTokenInTheUniverse" },
      });
    } catch (err) {
      console.error(err);
    }
  });
  it("REGISTER_FAIL is called when email already exists in database", async () => {
    mockAxios.post.mockImplementationOnce(
      async () =>
        await Promise.reject({ response: { data: { msg: "some error" } } }),
    );
    try {
      const response = await registerUser(user);
      await response(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: Types.REGISTER_FAIL,
        payload: "some error",
      });
    } catch (err) {
      console.error(err);
    }
  });
});
