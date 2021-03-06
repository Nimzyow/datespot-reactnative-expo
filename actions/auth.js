import * as Types from "./types";
import axios from "axios";

export const registerUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:4000/api/users",
      formData,
      config,
    );
    dispatch({
      type: Types.REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Types.REGISTER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:4000/api/auth",
      formData,
      config,
    );
    dispatch({
      type: Types.LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Types.LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};
