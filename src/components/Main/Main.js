import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';
import Skill from '../Skill';
import Panel from '../Panel';
import Container from './components/Container';

const H1 = styled.h1`
  color: #3c4042;
`;

const StyledForm = styled.form`
  & {
    display: flex;
    flex-wrap: wrap;
    input,
    select,
    button {
      margin-right: 5px;
    }

    input {
      flex: 1;
      flex-basis: 100%;
      margin-bottom: 15px;
    }
    select {
      flex: 1;
    }
    button {
      flex: 1;
    }

    @media (min-width: 768px) {
      input {
        flex: 2;
        margin-bottom: 0;
      }
      select {
        flex: 1;
      }
      button {
        flex: 0.5;
      }
    }
  }
`;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchSkills } = this.props;
    fetchSkills();
  }

  fetchStatus(fetchStatus) {
    return fetchStatus === 'LOADING' || fetchStatus === 'NOT_LOADED';
  }

  renderSkillItems() {
    const { skills = [] } = this.props;
    return skills.map((skill, index) => (
      <Skill
        key={`skill-${skill && skill.id}`}
        index={index + 1}
        name={skill && skill.name}
        experience={skill.experience}
      />
    ));
  }

  renderListContent(skills = [], skillsFetchStatus) {
    if (skillsFetchStatus === 'LOADED') {
      if (skills.length > 0) {
        return this.renderSkillItems();
      }
      return <p>Hey! please add one or more skills ;)</p>;
    }

    return <div>Something was wrong!</div>;
  }

  render() {
    const { skills, skillsFetchStatus } = this.props;

    const isLoading = this.fetchStatus(skillsFetchStatus);
    return (
      <Container className="Main">
        <H1>ADD YOUR SKILLS</H1>
        <StyledForm>
          <InputText placeholder="Node JS, Postgres, React, etc.," />
          <Select>
            <option value="" disabled selected>
              Experience
            </option>
            <option>{'<1 year'}</option>
            <option>1 - 3 years</option>
            <option>3 - 5 years</option>
            <option>5 - 7 years</option>
            <option>7+ years</option>
          </Select>
          <Button>Add skills</Button>
        </StyledForm>
        <Panel>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            this.renderListContent(skills, skillsFetchStatus)
          )}
        </Panel>
      </Container>
    );
  }
}

Main.propTypes = {
  fetchSkills: PropTypes.func.isRequired,
  addSkill: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired
};

export default Main;
