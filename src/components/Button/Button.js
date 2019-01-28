import styled from 'styled-components';

const Button = styled.button`
  & {
    font-size: 12px;
    padding: 10px 15px;
    text-transform: uppercase;
    color: #fff;
    background-color: #34495e;
    font-weight: normal;
    border-radius: 3px;
    letter-spacing: 1.5px;
    cursor: pointer;
  }

  &:disabled {
    background-color: #fafafa;
    color: #cdcdcd;
  }

  &:hover {
    background-color: #617180;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
