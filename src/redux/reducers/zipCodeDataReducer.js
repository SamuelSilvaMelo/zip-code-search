import {
  ZIP_CODE_REQUEST,
  ZIP_CODE_RECEIVE,
  ZIP_CODE_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  failure: false,
}

const zipCodeDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ZIP_CODE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case ZIP_CODE_RECEIVE:
    return {
      ...state,
      data: [action.data],
      isFetching: false,
    };
  case ZIP_CODE_FAILURE:
    return {
      ...state,
      isFetching: false,
      failure: true,
    }
  default:
    return state;
  };
};

export default zipCodeDataReducer;
