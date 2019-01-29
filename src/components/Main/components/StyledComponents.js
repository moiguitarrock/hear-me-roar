import styled from 'styled-components';

export const StyledForm = styled.form`
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

export const Container = styled.div`
  & {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 768px) {
    & {
      width: 750px;
    }
  }
  @media (min-width: 1200px) {
    & {
      width: 970px;
    }
  }

  @media (min-width: 992px) {
    & {
      width: 970px;
    }
  }
`;

export const H1 = styled.h1`
  color: #3c4042;
`;

export const Error = styled.p`
  color: red;
`;
