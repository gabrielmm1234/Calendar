import { 
  UPDATE_EVENT
} from '../actions/types';

const INITIAL_STATE = { event: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EVENT:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};