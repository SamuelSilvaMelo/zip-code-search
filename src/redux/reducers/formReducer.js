import { HANDLE_ZIP_CODE_INPUT } from '../actions';

const INITIAL_STATE = {
  zipCode: '',
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case HANDLE_ZIP_CODE_INPUT:
    return {
      ...state,
      zipCode: action.zipCode,
    }
  default:
    return state;
  };
};

export default formReducer;
