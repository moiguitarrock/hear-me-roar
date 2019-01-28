import { combineReducers } from 'redux';

export const entities = function(state = [], action) {
  const { data, id } = action.payload || {};
  switch (action.type) {
    case 'SKILLS_FETCH_SUCCESS':
      return [...state, ...data];
    case 'SKILLS_ADD_SUCCESS':
      return [...state, data];
    default:
      return state;
  }
};

export const skillsFetchStatus = function(state = 'NOT_LOADED', action) {
  switch (action.type) {
    case 'SKILLS_FETCH_REQUEST':
      return 'LOADING';
    case 'SKILLS_FETCH_SUCCESS':
      return 'LOADED';
    case 'SKILLS_FETCH_FAILURE':
      return 'FAILURE';
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  skillsFetchStatus
});
