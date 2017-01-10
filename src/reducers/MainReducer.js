import { 
  FIRST_STATE,
  MONTH_DAYS_STATE,
  NEXT_MOMENT_STATE,
  UPDATE_SELECTED_MOMENT,
  EVENTS_FETCH_SUCCESS
} from '../actions/types';
import moment from 'moment';

const INITIAL_STATE = {
      currentMonthMoment: moment(moment().format('YYYY-MM-DD')),
      selectedMoment: moment(moment().format()),
      titleFormat: 'MMMM YYYY',
      calendarDates: [],
      today: moment(),
      events: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_STATE:
      return INITIAL_STATE;
    case MONTH_DAYS_STATE:
      return { ...state, calendarDates: [moment(state.currentMonthMoment)] };
    case NEXT_MOMENT_STATE:
      return { ...state, currentMonthMoment: action.payload };
    case UPDATE_SELECTED_MOMENT:
      return { ...state, selectedMoment: action.payload };
    case EVENTS_FETCH_SUCCESS:
      return { ...state, events:action.payload};
    default:
      return state;
  }
};