export const fetchRequest = () => {
  return {
    type: 'SKILLS_FETCH_REQUEST',
    payload: {}
  };
};

export const fetchSuccess = ({ data }) => {
  return {
    type: 'SKILLS_FETCH_SUCCESS',
    payload: { data }
  };
};

export const fetchFailure = ({ error }) => {
  return {
    type: 'SKILLS_FETCH_FAILURE',
    payload: { error }
  };
};

export const addRequest = () => {
  return {
    type: 'SKILLS_ADD_REQUEST',
    payload: {}
  };
};

export const addSuccess = ({ data }) => {
  return {
    type: 'SKILLS_ADD_SUCCESS',
    payload: { data }
  };
};

export const addFailure = ({ error }) => {
  return {
    type: 'SKILLS_ADD_FAILURE',
    payload: { error }
  };
};

export const removeRequest = id => {
  return {
    type: 'SKILLS_REMOVE_REQUEST',
    payload: { id }
  };
};

export const removeSuccess = ({ id }) => {
  return {
    type: 'SKILLS_REMOVE_SUCCESS',
    payload: { id }
  };
};

export const removeFailure = ({ id, error }) => {
  return {
    type: 'SKILLS_REMOVE_FAILURE',
    payload: { id, error }
  };
};
