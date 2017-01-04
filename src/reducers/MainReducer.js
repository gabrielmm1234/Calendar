import { 
  FIRST_STATE
} from '../actions/types';
import moment from 'moment';

const INITIAL_STATE = {
      currentMonthMoment: moment(moment().format('YYYY-MM-DD')),
      selectedMoment: moment(moment().format()),
      titleFormat: 'MMMM YYYY'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};