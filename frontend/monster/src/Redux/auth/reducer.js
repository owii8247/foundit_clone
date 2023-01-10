import {
    AUTH_ERROR,
    AUTH_LOG_OUT,
    AUTH_LOADING,
    AUTH_SUCCESS,
  } from "./actionTypes";
  
  let token=localStorage.getItem("usertoken")
  export const AuthInitial = {
    loading: false,
    data: {
      token: token || "",
      isAuth: false,
    },
    error: false,
  };
  
  export const authenticationReducer = (state = AuthInitial, { type, payload }) => {
    switch (type) {
      case AUTH_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case AUTH_SUCCESS: {
        //console.log("reducer",payload)
        if(payload){
          localStorage.setItem("usertoken",payload)
        }
        return {
          ...state,
          loading: false,
          data: {
            token: payload,
            isAuth: true,
          },
          error: false,
        };
      }
      case AUTH_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case AUTH_LOG_OUT: {
        localStorage.removeItem("usertoken");
        return {
          ...state,
          loading: false,
          data: {
            token: "",
            isAuth: false,
          },
          error: false,
        };
      }
      default: {
        return state;
      }
    }
  };
  