import { 
	FIRST_STATE,
	DAY_NAME_STATE,
	MONTH_DAYS_STATE,
	NEXT_MOMENT_STATE
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
