import {authAPI} from "../api/api";
const ADD_PHONE = 'ADD_PHONE'
const ADD_TOKEN = 'ADD_TOKEN'



const initialState = {

  phone: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PHONE:
      return {
        ...state,
        phone: action.payload
        
      };
           case ADD_TOKEN:
      return {
        ...state,
        token: action.payload
        
      };
    default:
      return state;
  }
}

export default authReducer;




export const addPhone =(info,myphone) => {
  return {
    type: ADD_PHONE,
    payload: {info, myphone}
  }
}
export const addToken =(token) => {
  return {
    type: ADD_PHONE,
    payload: {token}
  }
}
export const getPhone = (myphone) => async (dispatch) => {
    
   
    const response = await authAPI.getPhone(myphone);
      console.log(response, "response")
    dispatch(addPhone(response, myphone));
    
    return response
}
export const getToken = (code, phone) => async (dispatch) => {
   
    const response = await authAPI.authCode(code, phone);
      console.log(response, "responsetoken")
    dispatch(addToken(response));
    
    return response
}