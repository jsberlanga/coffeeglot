import styled from "styled-components";

export const StyledHeader = styled.div`
  font-family: rothena;
  text-align: center;
  padding: 1.4rem 0 4rem;
  margin: 2rem 0 4rem;
  letter-spacing: 2px;
  background: ${props => props.theme.blue};
  background-image: url("https://www.transparenttextures.com/patterns/arches.png");
  color: ${props => props.theme.offWhite};
  box-shadow: 3px 3px 5px -2px ${props => props.theme.grey2};
  h2 {
    line-height: 1.8;
  }

  @media (max-width: 71130px) {
    font-size: 90%;
  }

  @media (max-width: 768px) {
    font-size: 80%;
  }
`;
