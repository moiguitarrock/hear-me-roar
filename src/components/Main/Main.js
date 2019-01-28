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

const Error = styled.p`
  color: red;
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

    this.state = {
      mySkill: '',
      myExperience: '',
      inputError: '',
      selectError: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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

  handleChange(e) {
    this.setState({
      mySkill: e.target.value,
      inputError: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { mySkill, myExperience } = this.state;
    if (mySkill.length < 4 || mySkill.length > 255) {
      this.setState({
        inputError:
          mySkill.length < 4 || mySkill.length > 255
            ? 'The skill must have more than 3 characters and less than 255'
            : ''
      });
      return;
    }

    if (myExperience === '') {
      this.setState({ selectError: 'Please select your experience' });
      return;
    }

    this.setState({ inputError: '', selectError: '' });

    this.props.addSkill({ name: mySkill, experience: myExperience });
    this.setState({ mySkill: '', myExperience: '' });
  }

  handleSelectChange(e) {
    this.setState({ myExperience: e.target.value });
  }

  render() {
    const { skills, skillsFetchStatus } = this.props;

    const isLoading = this.fetchStatus(skillsFetchStatus);
    return (
      <Container className="Main">
        <H1>ADD YOUR SKILLS</H1>
        <StyledForm>
          <InputText
            value={this.state.mySkill}
            onChange={this.handleChange}
            placeholder="Node JS, Postgres, React, etc.,"
          />
          <Select
            value={this.state.myExperience}
            onChange={this.handleSelectChange}
          >
            <option value="">Experience</option>
            <option value="<1 year">{'<1 year'}</option>
            <option value="1 - 3 years">1 - 3 years</option>
            <option value="3 - 5 years">3 - 5 years</option>
            <option value="5 - 7 years">5 - 7 years</option>
            <option value="7+ years">7+ years</option>
          </Select>
          <Button type="submit" onClick={this.handleSubmit}>
            Add skills
          </Button>
        </StyledForm>
        <Error>{this.state.inputError || this.state.selectError}</Error>
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
