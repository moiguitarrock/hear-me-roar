import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
