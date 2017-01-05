import { 
  FIRST_STATE,
  MONTH_DAYS_STATE
} from '../actions/types';
import moment from 'moment';

const INITIAL_STATE = {
      currentMonthMoment: moment(moment().format('YYYY-MM-DD')),
      selectedMoment: moment(moment().format()),
      titleFormat: 'MMMM YYYY',
      calendarDates: [],
      today: moment()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_STATE:
      return INITIAL_STATE;
    case MONTH_DAYS_STATE:
      return { ...state, calendarDates: [moment(state.currentMonthMoment)] };
    default:
      return state;
  }
};