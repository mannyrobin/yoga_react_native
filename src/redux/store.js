import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import authReducer from './authReducer';
import studioReducer from './studioReducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  phone: authReducer,
  studios: studioReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  return  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;