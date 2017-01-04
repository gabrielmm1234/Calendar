import { combineReducers } from 'redux';
import MainReducer from './MainReducer'

export default combineReducers({
	initialState: MainReducer
});