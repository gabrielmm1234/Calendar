import { combineReducers } from 'redux';
import MainReducer from './MainReducer'
import DayReducer from './DayReducer'
import ModalReducer from './ModalReducer'

export default combineReducers({
	initialState: MainReducer,
	dayNameState: DayReducer,
	modalState: ModalReducer
});