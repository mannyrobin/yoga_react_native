import {profileAPI} from "../api/api";
const GET_USER_INFO = 'GET_USER_INFO'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'





const initialState = {
userinfo: null
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_INFO:
      return {
        ...state,
       userinfo: action.payload
        
      };
   
    default:
      return state;
  }
}

export default profileReducer;




export const setUserinfo =(info) => {
  return {
    type: GET_USER_INFO,
    payload: {info}
  }
}
export const setupdateUserinfo = (info) => {
  
    dispatch(getUserinfo());
  
}

export const getUserinfo = (token) => async (dispatch) => {
    
   
    const response = await profileAPI.getUserInfo(token);
      console.log(response, "responseprofile")
    dispatch(setUserinfo(response));
    
    return response
}
export const updateUserinfo = (token,name,email,phone) => async (dispatch) => {
    
   
    const response = await profileAPI.updateUserInfo(token,name,email,phone);
      console.log(response, "responseprofileupdate")
    dispatch(getUserinfo(token));
    
    return response
}