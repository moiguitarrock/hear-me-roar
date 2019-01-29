import * as reducer from './';
import * as actions from '../../actions/skills/actions';

describe('Entities reducer', () => {
  const payload = {
    data: [{ id: 123 }],
    id: 123
  };

  it('should return the initial state', () => {
    expect(reducer.entities(undefined, {})).to.eql([]);
    expect(reducer.skillsFetchStatus(undefined, {})).to.eql('NOT_LOADED');
  });

  it(`should handle the SKILLS_FETCH_SUCCESS action`, () => {
    const action = actions.fetchSuccess(payload);
    expect(reducer.entities(undefined, action)).to.eql([{ id: 123 }]);
  });

  it(`should handle the SKILLS_ADD_SUCCESS action`, () => {
    const action = actions.addSuccess(payload);
    expect(reducer.entities(undefined, action)).to.eql([[{ id: 123 }]]);
  });

  it(`should handle the SKILLS_REMOVE_SUCCESS action`, () => {
    const action = actions.removeSuccess(payload);
    expect(reducer.entities(undefined, action)).to.eql([]);
  });

  it(`should handle the SKILLS_FETCH_REQUEST action`, () => {
    const action = actions.fetchRequest(payload);
    expect(reducer.skillsFetchStatus(undefined, action)).to.eql('LOADING');
  });

  it(`should handle the SKILLS_FETCH_SUCCESS action`, () => {
    const action = actions.fetchSuccess(payload);
    expect(reducer.skillsFetchStatus(undefined, action)).to.eql('LOADED');
  });

  it(`should handle the SKILLS_FETCH_FAILURE action`, () => {
    const action = actions.fetchFailure(payload);
    expect(reducer.skillsFetchStatus(undefined, action)).to.eql('FAILURE');
  });
});
