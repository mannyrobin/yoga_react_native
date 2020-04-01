import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import authReducer from './authReducer';
import studioReducer from './studioReducer';
import profileReducer from './profileReducer';
import ReviewReducer from './ReviewReducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  phone: authReducer,
  studios: studioReducer,
  userinfo: profileReducer,
  review: ReviewReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  return  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;