import styled from "styled-components";

const StyledTeacher = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  max-width: 100rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  border-bottom: 10px solid ${props => props.theme.grey2};
  background: ${props => props.theme.lightGrey};

  .teacher {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    filter: grayscale(40%);
    float: right;
    border-radius: 50%;
  }

  p {
    font-size: 1.7rem;
    line-height: 1;
    font-weight: 400;
    flex-grow: 1;
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export default StyledTeacher;
