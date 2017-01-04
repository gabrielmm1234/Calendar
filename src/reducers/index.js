import { combineReducers } from 'redux';
import MainReducer from './MainReducer'
import DayReducer from './DayReducer'

export default combineReducers({
	initialState: MainReducer,
	dayNameState: DayReducer
});