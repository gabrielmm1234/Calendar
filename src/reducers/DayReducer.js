import { 
  DAY_NAME_STATE
} from '../actions/types';

const INITIAL_STATE = { firstDay: 1, dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DAY_NAME_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};