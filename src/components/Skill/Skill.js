import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SkillContainter = styled.div`
  & {
    width: 100%;
    position: relative;
    display: flex;
    border: 1px solid #f4f5f6;
    border-radius: 3px;
    transition: border 1s;
    background: #fff;
    margin: 0;

    @media (min-width: 768px) {
      min-width: 160px;
      width: auto;
    }

    @media (min-width: 768px) {
      margin: 0 5px 5px 0;
      border: 2px solid #f4f5f6;
    }

    > div:first-child {
      padding: 7px 5px;
      background: #80878a;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      transition: background 0.5s;
      border-radius: 3px 0 0 3px;

      &.first-skills {
        background: #26333c;
      }

      + div {
        padding: 0 30px 0 12px;
        border-radius: 0 3px 3px 0;

        h2 {
          color: #26333c;
        }

        p {
          padding-left: 5px;
          color: #707a7e;
          font-size: 14px;
        }
      }
    }

    .close {
      position: absolute;
      color: #707a7e;
      cursor: pointer;
      font-weight: bolder;
      display: none;
      top: 28px;
      right: 11px;
      font-size: 16px;

      @media (min-width: 768px) {
        top: 4px;
        right: 4px;
        font-size: 14px;
      }
    }

    &:hover {
      border: 1px solid #e2e5e6;
      @media (min-width: 768px) {
        border: 2px solid #e2e5e6;
      }

      > div:first-child {
        background-color: #19998e;
      }
      .close {
        display: block;
      }
    }
  }
`;

const Skill = ({ index, name, experience }) => {
  return (
    <SkillContainter className="skill-item">
      <div className={index <= 5 ? 'first-skills' : ''}>{index}</div>
      <div>
        <h2>{name}</h2>
        <p>{experience}</p>
      </div>
      <div className="close">X</div>
    </SkillContainter>
  );
};

Skill.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired
};

export default Skill;
