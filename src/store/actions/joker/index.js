import axios from 'axios';
import { GET_SUCCESS, GET_ERROR } from '../types/joker';

const getSuccess = data => ({
  type: GET_SUCCESS,
  payload: {
    data,
  },
});

const getError = error => ({
  type: GET_ERROR,
  payload: {
    error,
  },
});

export default search => dispatch => axios.get(
  `http://api.icndb.com/jokes/random${search}`,
)
  .then(({ data }) => dispatch(getSuccess(data)))
  .catch(error => dispatch(getError(error)));