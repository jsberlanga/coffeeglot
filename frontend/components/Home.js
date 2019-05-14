import styled from "styled-components";

const StyledHome = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 50%),
    url("https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1951&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 85vh;
  opacity: 0.7;
  position: relative;
  color: ${props => props.theme.grey};
  border-radius: 2rem;
  filter: blur(0.4px) grayscale(80%);
  margin-top: 1rem;
  h1 {
    text-align: right;
    font-size: 6rem;
    padding: 44rem 5rem 0;
    font-family: rothena;
    font-style: italic;
    letter-spacing: 7px;
    color: ${props => props.theme.lightGrey};
    filter: blur(1.4px);
  }
`;

const Home = props => {
  return (
    <StyledHome>
      <h1>feeding mind, body and spirit</h1>
    </StyledHome>
  );
};

export default Home;
