import styled from 'styled-components';

const Button = styled.input`
  & {
    font-size: 12px;
    border: 1px solid #657584;
    border-radius: 3px;
    padding: 9px 15px;
  }

  &::placeholder {
    color: #b5bac4;
  }
`;

export default Button;
