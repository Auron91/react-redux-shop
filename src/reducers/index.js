import { combineReducers } from 'redux';
import viewReducer from './viewReducer'
import shopReducer from './shopReducer';

export default combineReducers({
    products: shopReducer,
    settings: viewReducer
})