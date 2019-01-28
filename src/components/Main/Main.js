import React, { Component } from 'react';
import styled from 'styled-components';

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
  render() {
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
          <Skill index={1} name="Node.js" experience="<1 year" />
          <Skill index={1} name="User experience design" experience="<1 year" />
          <Skill index={1} name="Webpack JS" experience="<1 year" />
          <Skill index={1} name="Webpack JS" experience="<1 year" />
          <Skill index={1} name="Product management" experience="<1 year" />
          <Skill index={1} name="Vue.js" experience="<1 year" />
          <Skill index={1} name="Webpack JS" experience="<1 year" />
        </Panel>
      </Container>
    );
  }
}

export default Main;
