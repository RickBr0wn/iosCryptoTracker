import axios from 'axios';
import CONSTANTS from '../Constants';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({type: CONSTANTS.FETCHING_COIN_DATA});

    return axios
      .get(`${CONSTANTS.API_BASE_URL}/v1/ticker/?limit=10`)
      .then(res =>
        dispatch({
          type: CONSTANTS.FETCHING_COIN_DATA_SUCCESS,
          payload: res.data,
        }),
      )
      .catch(err =>
        dispatch({
          type: CONSTANTS.FETCHING_COIN_DATA_FAIL,
          payload: err.data,
        }),
      );
  };
}
