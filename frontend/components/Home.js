import styled from "styled-components";
import Particles from "react-particles-js";

const StyledHomeHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 50%),
    url("../../static/images/cafes/main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 95vh;
  opacity: 0.7;
  position: relative;
  color: ${props => props.theme.grey};
  filter: blur(0.4px) grayscale(50%);
  margin-top: 2rem;
  border-top-right-radius: 20rem;
  border-bottom-left-radius: 20rem;
  box-shadow: 0 0 2px 0px ${props => props.theme.grey2};
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

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "steps";
  margin: 2rem 1rem 0;
  grid-gap: 3rem;
  .title {
    grid-area: title;
    text-align: center;
  }
  .steps {
    grid-area: steps;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Home = props => {
  return (
    <>
      <StyledHomeHero>
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
      </StyledHomeHero>
      <Grid>
        <div className="title">
          <h2>Start to learn or teach a language in three easy steps:</h2>
        </div>
        <div className="steps">
          <div>
            <h3>1. Choose one of our Cafes</h3>
            <h5>and get ready to drink our best fresh coffee</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div>
            <h3>2. Create your teacher profile</h3>
            <h5>or view all the other teachers profiles</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div>
            <h3>3. Create your own course</h3>
            <h5>Or enroll into another amazing course</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Home;
