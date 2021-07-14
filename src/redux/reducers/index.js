import { combineReducers } from 'redux';
import formReducer from './formReducer';
import zipCodeDataReducer from './zipCodeDataReducer';

const rootReducer = combineReducers({ formReducer, zipCodeDataReducer });

export default rootReducer;
