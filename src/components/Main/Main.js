import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';
import Skill from '../Skill';

const H1 = styled.h1`
  color: #3c4042;
`;

const Panel = styled.div`
  & {
    background-color: #f4f5f6;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
`;

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <H1>ADD YOUR SKILLS</H1>
        <form>
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
        </form>
        <Panel>
          <Skill index={1} name="Node JS" experience="<1 year" />
          <Skill index={1} name="User experience design" experience="<1 year" />
          <Skill index={1} name="Webpack JS" experience="<1 year" />
          <Skill index={1} name="Webpack JS" experience="<1 year" />
          <Skill index={1} name="Product management" experience="<1 year" />
          <Skill index={1} name="ECC Team leader" experience="<1 year" />
          <Skill index={1} name="Webpack JS" experience="<1 year" />
        </Panel>
      </div>
    );
  }
}

export default Main;
