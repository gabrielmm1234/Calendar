import { 
	FIRST_STATE,
	DAY_NAME_STATE,
	MONTH_DAYS_STATE,
	NEXT_MOMENT_STATE,
	UPDATE_SELECTED_MOMENT,
	UPDATE_EVENT
} from './types';

export const firstState = () => {
	return {
		type: FIRST_STATE
	};
};

export const dayNameState = () => {
	return {
		type: DAY_NAME_STATE
	};
};

export const buildMonthDays = () => {
	return {
		type: MONTH_DAYS_STATE
	};
};

export const updateCurrentMoment  = (moment) => {
	return {
		type: NEXT_MOMENT_STATE,
		payload: moment
	};
};

export const updateSelectedMoment  = (date) => {
	return {
		type: UPDATE_SELECTED_MOMENT,
		payload: date
	};
};

export const updateEvent  = ({ prop,value }) => {
	return {
		type: UPDATE_EVENT,
		payload: { prop, value }
	};
};

