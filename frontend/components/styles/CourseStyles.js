import styled from "styled-components";

const StyledCourse = styled.div`
  background: ${props => props.theme.lightGrey};
  box-shadow: 10px 10px 0px 0px ${props => props.theme.grey2};
  position: relative;
  display: flex;
  flex-direction: column;

  .flag {
    margin: 0 auto 30rem;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    font-size: 1.7rem;
    line-height: 2;
    font-weight: 400;
    flex-grow: 1;
    padding: 0 3rem;
  }
  .buttonList {
    display: grid;
    font-weight: 700;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    & > * {
      letter-spacing: 3px;
      background: ${props => props.theme.green};
      color: #fff;
      border: 0;
      padding: 1rem;
    }

    a {
      cursor: pointer;
    }
  }
`;

export default StyledCourse;
