import {studioAPI} from "../api/api";
const GET_STUDIO = 'GET_STUDIO'
const GET_SINGLE_STUDIO = 'GET_SINGLE_STUDIO'




const initialState = {
studios: null,
singleStudios: null,
};

const studioReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_STUDIO:
      return {
        ...state,
        studios: action.payload
        
      };
 case GET_SINGLE_STUDIO:
      return {
        ...state,
        singleStudios: action.payload
        
      };

    default:
      return state;
  }
}

export default studioReducer;




export const setStudios =(studios) => {
  return {
    type: GET_STUDIO,
    payload: {studios}
  }
}
export const setSingleStudios =(singleStudios) => {
  return {
    type: GET_SINGLE_STUDIO,
    payload: {singleStudios}
  }
}

export const getStudios = (token) => async (dispatch) => {
    
   
    const response = await studioAPI.getStudio(token);
      console.log(response, "responsestudio")
    dispatch(setStudios(response));
    
    return response
}
export const getSingleStudios = (token, id) => async (dispatch) => {
    
   
    const response = await studioAPI.getSingleStudio(token, id);
      console.log(response, "responsesinglestudio")
    dispatch(setSingleStudios(response));
    
    return response
}