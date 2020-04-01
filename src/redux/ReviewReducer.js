import {reviewAPI} from "../api/api";
const GET_REVIEW = 'GET_REVIEW'
const ADD_REVIEW = 'ADD_REVIEW'





const initialState = {
review: null
};

const ReviewReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_REVIEW:
      return {
        ...state,
       review: action.payload
        
      };
   
    default:
      return state;
  }
}

export default ReviewReducer;




export const setReviewinfo =(info) => {
  return {
    type: GET_REVIEW,
    payload: {info}
  }
}
export const setupdateRiviewinfo = (info) => {

    dispatch(setReviewinfo());
  
}

export const getReview = (token,id) => async (dispatch) => {
    
   
    const response = await reviewAPI.getReview(token,id);
      console.log(response, "responsereview")
    dispatch(setReviewinfo(response));
    
    return response
}
export const addReview = (token,rating,text,id) => async (dispatch) => {
    
   
    const response = await reviewAPI.addReview(token,rating,text,id);
    dispatch(getReview(token,id));
    
    return response
}