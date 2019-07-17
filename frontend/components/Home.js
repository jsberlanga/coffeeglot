import styled from "styled-components";
import Particles from "react-particles-js";

import Link from "next/link";

const StyledHomeHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 50%),
    url("../../static/images/cafes/main3.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 130rem;
  margin: 0 auto;
  height: 60vh;
  opacity: 0.7;
  position: relative;
  color: ${props => props.theme.grey};
  filter: blur(0.4px) grayscale(10%);
  margin-top: 2rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  box-shadow: 0 0 2px 0px ${props => props.theme.grey2};
  h1 {
    text-align: right;
    font-size: 6rem;
    padding: 44rem 5rem 0;
    font-family: rothena;
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
  h3 {
    font-family: linlibertine;
    margin: 0;
  }
  h5 {
    font-family: linlibertine-bold;
    margin: 0.5rem;
    font-size: 1.8rem;
  }
  display: grid;

  margin: 1rem 5rem 0;
  grid-gap: 1rem;
  text-align: center;

  .steps {
    grid-area: steps;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    .steps--1,
    .steps--2,
    .steps--3 {
      margin: 0 3rem;
    }
    .steps--image {
      img {
        width: 90px;
        filter: blur(0.6px) grayscale(30%);
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  p {
    margin: 1rem 0 0;
  }
  a {
    border-bottom: 3px solid ${props => props.theme.yellow};
    letter-spacing: -0.5px;
    font-size: 2.3rem;
    margin-bottom: 5rem;
    font-family: linlibertine-italic;
    transition: all 0.2s;
    :hover {
      color: ${props => props.theme.blue};
      border-bottom: 3px solid ${props => props.theme.blue};
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
      </StyledHomeHero>
      <Grid>
        <div className="steps">
          <div className="steps--1">
            <div className="steps--image">
              <img src="../static/images/ico1.png" />
            </div>
            <h3>Choose one of our Cafes</h3>
            <h5>and get ready to drink our best fresh coffee</h5>
            <p>
              We give you the opportunity to use one of our Cafes to teach your
              own course if you are a language instructor or to learn a language
              if you come here as a student.
            </p>
            <p>
              We guarantee a quiet spot for teachers and students and the best
              coffee money can buy.
            </p>
            <p>
              Go ahead and check out where we are based and join any course you
              like.
            </p>
            <Link href="/cafes">
              <a>Visit our cafes</a>
            </Link>
          </div>
          <div className="steps--2">
            <div className="steps--image">
              <img src="../static/images/ico2.png" />
            </div>
            <h3>Create your own course</h3>
            <h5> or enroll into another amazing course </h5>
            <p>
              If you come here as a teacher, go ahead and start creating your
              own amazing courses by simply filling out a form. Hundreds of
              students will join you and your amazing accent.
            </p>
            <Link href="/add">
              <a>Create a course</a>
            </Link>
            <p>
              If you come here as a student, that's fantastic! Check the courses
              created and join us in our Cafes. We promise a great coffee and an
              amazing learning experience.
            </p>
            <Link href="/courses">
              <a>Enroll into a course</a>
            </Link>
          </div>
          <div className="steps--3">
            <div className="steps--image">
              <img src="../static/images/ico3.png" />
            </div>
            <h3>Check your profile</h3>
            <h5>and view and rate all the other teachers profiles</h5>
            <p>
              If you think something is not clear enough, you can contact your
              students from your profile to send them further instructions.
            </p>
            <Link href="/profile">
              <a>Visit your profile</a>
            </Link>
            <p>
              ...and don't forget to rate our teachers. They would love to have
              your feedback!
            </p>
            <Link href="/teachers">
              <a>Rate a teacher</a>
            </Link>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Home;
