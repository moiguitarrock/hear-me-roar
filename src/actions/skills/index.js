import axios from 'axios';

import * as actions from './actions';

const API_URL = 'http://localhost:3000/skills';

export const fetch = () => {
  return async dispatch => {
    try {
      dispatch(actions.fetchRequest());
      const { data } = await axios.get(`${API_URL}`);
      dispatch(actions.fetchSuccess({ data }));
    } catch (error) {
      dispatch(actions.fetchFailure({ error }));
    }
  };
};

export const add = data => {
  return async dispatch => {
    try {
      dispatch(actions.addRequest());
      const result = await axios.post(`${API_URL}`, data);
      dispatch(actions.addSuccess({ data: result.data }));
    } catch (error) {
      dispatch(actions.addFailure({ error }));
    }
  };
};

export const remove = id => {
  return async dispatch => {
    try {
      dispatch(actions.removeRequest());
      await axios.delete(`${API_URL}/${id}`);
      dispatch(actions.removeSuccess({ id }));
    } catch (error) {
      dispatch(actions.removeFailure({ id, error }));
    }
  };
};
