import styled from "styled-components";
import Particles from "react-particles-js";

const StyledHome = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 50%),
    url("https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1951&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 95vh;
  opacity: 0.7;
  position: relative;
  color: ${props => props.theme.grey};
  filter: blur(0.4px) grayscale(80%);
  margin-top: 2rem;
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
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
  .particles {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;

const Home = props => {
  return (
    <StyledHome>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
      <h1>feeding mind, body and spirit</h1>
    </StyledHome>
  );
};

export default Home;
