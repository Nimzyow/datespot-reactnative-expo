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
  it("registers user", async () => {
    mockAxios.post.mockImplementationOnce(async () =>
      Promise.resolve({ data: { token: "greatestTokenInTheUniverse" } }),
    );
    try {
      const response = await registerUser(user);

      await response(dispatch);

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith("/api/users", user, {
        headers: { "Content-Type": "application/json" },
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: Types.REGISTER_SUCCESS,
        payload: { token: "greatestTokenInTheUniverse" },
      });
    } catch (err) {
      console.error(err);
    }
  });
});
