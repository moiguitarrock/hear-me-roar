import axios from 'axios';

import * as actions from './actions';

const API_UR = 'http://localhost:3000';

export const fetch = () => {
  return async dispatch => {
    try {
      dispatch(actions.fetchRequest());
      const { data } = await axios.get(`${API_UR}/skills`);
      dispatch(actions.fetchSuccess({ data }));
    } catch (error) {
      dispatch(actions.fetchFailure({ error }));
    }
  };
};
export const add = ({ id, data }) => {};
export const remove = id => {};
