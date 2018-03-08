import axios from 'axios';
import { FETCH_KEYS } from './types';

export const fetchKeys = () => {
  return function(dispatch) {
    axios
      .get('/api/keys')
      .then(res => dispatch({ type: FETCH_KEYS, payload: res }));
  };
};