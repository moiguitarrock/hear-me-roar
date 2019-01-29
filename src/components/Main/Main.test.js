import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import {
  H1,
  Container,
  StyledForm,
  Error
} from './components/StyledComponents';
import InputText from '../InputText';
import Select from '../Select';
import Button from '../Button';
import Skill from '../Skill';
import Panel from '../Panel';

const defaultProps = {
  skills: [
    { id: 1, name: 'text', experience: 'test' },
    { id: 2, name: 'text 2', experience: 'test 2' }
  ],
  fetchSkills: spy(),
  addSkill: spy(),
  removeSkill: spy()
};

it('renders without crashing', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  expect(wrapper.find(Container)).to.be.present();
  expect(wrapper.find(Container)).to.have.className('Main');
});

it('renders the correct title', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  const title = wrapper.find(H1).text();
  expect(title).to.eql('ADD YOUR SKILLS');
});

it('renders a Form component with the correct params', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  const form = wrapper.find(StyledForm);
  expect(form).to.be.present();
  const input = form.find(InputText);
  expect(input).to.be.present();
  expect(input)
    .to.have.props(['value', 'onChange', 'placeholder'])
    .to.eql([
      wrapper.state().mySkill,
      wrapper.instance().handleChange,
      'Node JS, Postgres, React, etc.,'
    ]);
});

it('renders a Select component with the correct params and options', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  const select = wrapper.find(Select);
  expect(select).to.be.present();
  expect(select)
    .to.have.props(['value', 'onChange'])
    .to.eql([
      wrapper.state().myExperience,
      wrapper.instance().handleSelectChange
    ]);
  const options = select.find('option');
  expect(options.length).to.eql(6);
  expect(options.at(0).props().value).to.eql('');
  expect(options.at(0).text()).to.eql('Experience');
  expect(options.at(1).props().value).to.eql('<1 year');
  expect(options.at(1).text()).to.eql('<1 year');
  expect(options.at(2).props().value).to.eql('1 - 3 years');
  expect(options.at(2).text()).to.eql('1 - 3 years');
  expect(options.at(3).props().value).to.eql('3 - 5 years');
  expect(options.at(3).text()).to.eql('3 - 5 years');
  expect(options.at(4).props().value).to.eql('5 - 7 years');
  expect(options.at(4).text()).to.eql('5 - 7 years');
  expect(options.at(5).props().value).to.eql('7+ years');
  expect(options.at(5).text()).to.eql('7+ years');
});

it('renders a Button with the correct params', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  const button = wrapper.find(Button);
  expect(button).to.be.present();
  expect(button)
    .to.have.props(['type', 'onClick'])
    .to.eql(['submit', wrapper.instance().handleSubmit]);
});

it('renders the error component with the default text on it', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  const error = wrapper.find(Error);
  expect(error).to.be.present();
  expect(error.text()).to.eql('');
});

it('show the Error message based on the state', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  wrapper.setState({ inputError: 'test1', selectError: 'test2' });
  const error = wrapper.find(Error);
  expect(error).to.be.present();
  expect(error.text()).to.eql('test1');
});

it('show the Error message based on the state', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  wrapper.setState({ inputError: '', selectError: 'test2' });
  const error = wrapper.find(Error);
  expect(error).to.be.present();
  expect(error.text()).to.eql('test2');
});

it('should renders a Panel component', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  const panel = wrapper.find(Panel);
  expect(panel).to.be.present();
});

it('renders the loading message depending on the param', () => {
  const wrapper = shallow(
    <Main {...defaultProps} skillsFetchStatus="LOADING" />
  );
  const panel = wrapper.find(Panel);
  const loading = panel.find('p.skills-container-loading').at(0);
  expect(loading).to.be.present();
  expect(loading.text()).to.eql('Loading...');
  wrapper.setProps({ skillsFetchStatus: 'NOT_LOADED' });
  expect(loading.text()).to.eql('Loading...');
});

it('renders the list with the skills', () => {
  const wrapper = shallow(
    <Main {...defaultProps} skillsFetchStatus="LOADED" />
  );
  const skills = wrapper.find(Skill);
  expect(skills.length).to.eql(2);
  expect(skills.at(0))
    .to.have.props(['id', 'index', 'name', 'experience', 'onHandleClick'])
    .to.eql([1, 1, 'text', 'test', wrapper.instance().handleRemove]);
});

it('renders the black state message when there is no one skill', () => {
  defaultProps.skills = [];
  const wrapper = shallow(
    <Main {...defaultProps} skillsFetchStatus="LOADED" />
  );
  const skills = wrapper.find(Skill);
  expect(skills.length).to.eql(0);
  const blankState = wrapper
    .find(Panel)
    .find('p.skills-blank-state')
    .at(0);

  expect(blankState).to.be.present();
  expect(blankState.text()).to.eql('Hey! please add one or more skills ;-)');
});

it('renders a error message when something went wrong in the fetching', () => {
  const wrapper = shallow(<Main {...defaultProps} skillsFetchStatus="ERROR" />);
  const errorMessage = wrapper.find(Panel).find('p.skills-something-wrong');
  expect(errorMessage).to.be.present();
  expect(errorMessage.text()).to.eql('Something went wrong! :-(');
});

it('should call the handleSubmit function once the user submitted the formulary', () => {
  const handleSubmit = spy(Main.prototype, 'handleSubmit');
  const wrapper = shallow(<Main {...defaultProps} />);
  const button = wrapper.find(Button);
  button.simulate('click', { preventDefault: spy() });
  expect(handleSubmit.calledOnce).to.be.true;
});

it('should call the addSkill prop when ', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  wrapper.setState({ mySkill: 'qwerty', myExperience: 'test' });
  wrapper.instance().handleSubmit({ preventDefault: spy() });
  expect(defaultProps.addSkill.calledOnce).to.be.true;
  expect(
    defaultProps.addSkill.calledOnceWithExactly({
      name: 'qwerty',
      experience: 'test'
    })
  ).to.be.true;
});

it('should sets the error states once the submit validations fails ', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  wrapper.setState({ mySkill: '', myExperience: '' });
  wrapper.instance().handleSubmit({ preventDefault: spy() });
  expect(wrapper.state().inputError).to.eql(
    'The skill must have more than 3 characters and less than 255'
  );
  wrapper.setState({ mySkill: 'qwerty', myExperience: '' });
  wrapper.instance().handleSubmit({ preventDefault: spy() });
  expect(wrapper.state().selectError).to.eql('Please select your experience');
});

it('should call the handleSelectChange function once the user changes the selected experience option', () => {
  const handleSelectChangeSpy = spy(Main.prototype, 'handleSelectChange');
  const wrapper = shallow(<Main {...defaultProps} />);
  const select = wrapper.find(Select);
  select.simulate('change', { target: { value: 'test' } });
  expect(handleSelectChangeSpy.calledOnce).to.be.true;
  expect(wrapper.state().myExperience).to.eql('test');
});

it('should calls the handleChange function once the user write in the input component', () => {
  const handleChangeSpy = spy(Main.prototype, 'handleChange');
  const wrapper = shallow(<Main {...defaultProps} />);
  const input = wrapper.find(InputText);
  input.simulate('change', { target: { value: 'test' } });
  expect(handleChangeSpy.calledOnce).to.be.true;
  expect(wrapper.state().mySkill).to.eql('test');
  expect(wrapper.state().inputError).to.eql('');
});

it('calls the fetchSkills prop function once the component will mount', () => {
  const wrapper = shallow(<Main {...defaultProps} />);
  wrapper.instance().componentDidMount();
  expect(defaultProps.fetchSkills.called).to.be.true;
});

it('call the removeSkill function prop once the handleRemove function will be called', () => {
  const wrapper = shallow(
    <Main {...defaultProps} skillsFetchStatus="LOADED" />
  );
  const id = 1;
  wrapper.instance().handleRemove(id);
  expect(defaultProps.removeSkill.calledOnce).to.be.true;
  expect(defaultProps.removeSkill.calledWithExactly(id)).to.be.true;
});
