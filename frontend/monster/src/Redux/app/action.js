import * as types from "./actionTypes";
import axios from "axios";

export const getJobs = (params) => (dispatch) => {
  dispatch({ type: types.GET_JOBS_REQUEST });
  return axios
    .get(`https://founditbackend-production.up.railway.app/job`, params)
    .then((res) => {
      dispatch({ type: types.GET_JOBS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_JOBS_FAILURE, payload: err });
    });
};
//https://foundit-backend-qu3p.onrender.com
export const getJobsDescription = (id) => (dispatch) => {
  dispatch({ type: types.GET_JOBS_REQUEST });
  return axios
    .get(`https://founditbackend-production.up.railway.app/job/${id}`)
    .then((res) => {
      dispatch({ type: types.GET_JOBS_SUCCESS, payload: res.data });
      console.log("check", res.data);
    })
    .catch((err) => {
      dispatch({ type: types.GET_JOBS_FAILURE, payload: err });
    });
};
