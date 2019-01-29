import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Skill, { SkillContainter } from './Skill';
import { wrap } from 'module';

const defaultProps = {
  index: 1,
  name: 'test',
  experience: 'qwerty',
  id: 123,
  onHandleClick: spy()
};

it('renders without crashing', () => {
  const wrapper = shallow(<Skill {...defaultProps} />);
  expect(wrapper).to.be.present();
});

it('contains a SkillContainer component', () => {
  const wrapper = shallow(<Skill {...defaultProps} />);
  expect(wrapper.find(SkillContainter)).to.be.present();
});

it('assign the className depending on the index prop', () => {
  const wrapper = shallow(<Skill {...defaultProps} />);
  expect(wrapper.find('div.first-skills')).to.be.present();
  expect(
    wrapper
      .find('div.first-skills')
      .at(0)
      .text()
  ).to.eql('1');
  wrapper.setProps({ index: 8 });
  expect(wrapper.find('div.first-skills')).to.not.be.present();
  expect(
    wrapper
      .find('div.rest-skills')
      .at(0)
      .text()
  ).to.eql('8');
});

it('contains the name and the experience element with the correct text', () => {
  const wrapper = shallow(<Skill {...defaultProps} />);
  expect(wrapper.find(SkillContainter).find('h2')).to.be.present();
  expect(
    wrapper
      .find(SkillContainter)
      .find('h2')
      .at(0)
      .text()
  ).to.eq('test');
  expect(wrapper.find(SkillContainter).find('p')).to.be.present();
  expect(
    wrapper
      .find(SkillContainter)
      .find('p')
      .at(0)
      .text()
  ).to.eq('qwerty');
});

it('has the close element with the correct params', () => {
  const wrapper = shallow(<Skill {...defaultProps} />);
  const close = wrapper.find('div.close').at(0);
  expect(close).to.have.props(['onClick']).to.eql;
  [() => defaultProps.onHandleClick(1)];
  expect(close.text()).to.eql('X');
});

it('should call the onHandleClick once the close element will be click', () => {
  const wrapper = shallow(<Skill {...defaultProps} />);
  const close = wrapper.find('div.close').at(0);
  close.simulate('click', {});
  expect(defaultProps.onHandleClick.calledOnce).to.be.true;
  expect(defaultProps.onHandleClick.calledWithExactly(123)).to.be.true;
});
