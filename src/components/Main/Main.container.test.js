import { mapStateToProps } from './Main.container';

describe('Main container', () => {
  const state = {
    skills: {
      entities: [
        { id: 1, name: 'test', experience: 'test2' },
        { id: 1, name: 'test3', experience: 'test3' }
      ]
    },
    skillsFetchStatus: 'LOADED'
  };
  it('returns an object with the correct props', () => {
    const expected = {
      skills: state.skills.entities,
      skillsFetchStatus: state.skills.skillsFetchStatus
    };
    expect(expected).to.be.eql(mapStateToProps(state));
  });
});
