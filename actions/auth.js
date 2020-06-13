import * as Types from "./types";
import axios from "axios";

export const registerUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/users", formData, config);
    dispatch({
      type: Types.REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Types.REGISTER_FAIL,
      payload: err,
    });
  }
};
