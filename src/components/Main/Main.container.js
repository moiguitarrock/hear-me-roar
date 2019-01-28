import { connect } from 'react-redux';

import * as skillActions from '../../actions/skills';
import Main from './Main';

export const mapStateToProps = state => {
  const { skills } = state;
  return {
    skills: skills.entities,
    skillsFetchStatus: skills.skillsFetchStatus
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSkills: skillActions.fetch,
    addSkill: skillActions.add,
    removeSkill: skillActions.remove
  }
)(Main);
