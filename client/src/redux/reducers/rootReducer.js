import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import loaderReducer from '../reducers/loaderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});

export default rootReducer;
