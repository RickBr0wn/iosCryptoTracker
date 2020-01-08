import CONSTANTS from '../Constants';

const initialState = {
  isFetching: 'null',
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      });
    case CONSTANTS.FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });
    case CONSTANTS.FETCHING_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload,
      });
    default:
      // return new Error('an ACTION with a valid `type` must be used');
      return state;
  }
}
