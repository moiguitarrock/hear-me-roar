import * as actions from './actions';

describe('skills/actions', () => {
  describe('actions for FETCH skills', () => {
    it('should create an action to SKILLS_FETCH_REQUEST', () => {
      const expected = {
        type: 'SKILLS_FETCH_REQUEST',
        payload: {}
      };
      expect(actions.fetchRequest()).to.eql(expected);
    });

    it('should create an action to SKILLS_FETCH_SUCCESS', () => {
      const expected = {
        type: 'SKILLS_FETCH_SUCCESS',
        payload: { data: { id: 123 } }
      };
      expect(actions.fetchSuccess({ data: { id: 123 } })).to.eql(expected);
    });

    it('should create an action to SKILLS_FETCH_FAILURE', () => {
      const expected = {
        type: 'SKILLS_FETCH_FAILURE',
        payload: { error: {} }
      };
      expect(actions.fetchFailure({ error: {} })).to.eql(expected);
    });
  });

  describe('actions for ADD skills', () => {
    it('should create an action to SKILLS_ADD_REQUEST', () => {
      const expected = {
        type: 'SKILLS_ADD_REQUEST',
        payload: {}
      };
      expect(actions.addRequest()).to.eql(expected);
    });

    it('should create an action to SKILLS_ADD_SUCCESS', () => {
      const expected = {
        type: 'SKILLS_ADD_SUCCESS',
        payload: { data: { id: 123 } }
      };
      expect(actions.addSuccess({ data: { id: 123 } })).to.eql(expected);
    });

    it('should create an action to SKILLS_ADD_FAILURE', () => {
      const expected = {
        type: 'SKILLS_ADD_FAILURE',
        payload: { error: {} }
      };
      expect(actions.addFailure({ error: {} })).to.eql(expected);
    });
  });

  describe('actions for REMOVE skills', () => {
    it('should create an action to SKILLS_REMOVE_REQUEST', () => {
      const expected = {
        type: 'SKILLS_REMOVE_REQUEST',
        payload: { id: 1 }
      };
      expect(actions.removeRequest(1)).to.eql(expected);
    });

    it('should create an action to SKILLS_REMOVE_SUCCESS', () => {
      const expected = {
        type: 'SKILLS_REMOVE_SUCCESS',
        payload: { id: 123 }
      };
      expect(actions.removeSuccess({ id: 123 })).to.eql(expected);
    });

    it('should create an action to SKILLS_REMOVE_FAILURE', () => {
      const expected = {
        type: 'SKILLS_REMOVE_FAILURE',
        payload: { id: 1, error: {} }
      };
      expect(actions.removeFailure({ error: {}, id: 1 })).to.eql(expected);
    });
  });
});
