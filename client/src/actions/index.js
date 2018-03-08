import axios from 'axios';
import { FETCH_KEYS } from './types';

export const fetchKeys = () => async dispatch => {
 const res = await axios.get('/api/keys');

 dispatch({ type: FETCH_KEYS, payload: res });
};