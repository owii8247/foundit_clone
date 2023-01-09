import * as types from "./actionTypes"
const initialState = {
  job: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload} = action
  switch(type){
    default:
      return state
    case types.GET_JOBS_REQUEST:
      return{...state, isLoading:true, isError:false}
    case types.GET_JOBS_SUCCESS:
      return{...state,job:payload, isLoading:false, isError:false}
    case types.GET_JOBS_FAILURE:
      return{...state, job:[], isLoading:false, isError:true}    
  }
  
}