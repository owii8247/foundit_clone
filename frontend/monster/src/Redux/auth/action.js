import axios from "axios";
import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOG_OUT,
} from "./actionTypes";

// user login
export const Userlogin = (logincred) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  console.log(logincred)
  try {
    let res = await axios.post("https://founditbackend-production.up.railway.app/user/login", logincred);
    console.log("res",res);
    dispatch({ type: AUTH_SUCCESS, payload: res.data.document.token

    });
  } catch (e) {
    dispatch({ type: AUTH_ERROR });
  }
};

// user logout
export const Userlogout = () => ({ type: AUTH_LOG_OUT });
