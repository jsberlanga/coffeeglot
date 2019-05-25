import styled from "styled-components";

const StyledCourse = styled.div`
  background: ${props => props.theme.lightGrey2};
  box-shadow: 6px 6px 6px -8px ${props => props.theme.grey2};
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  .flag {
    height: 7rem;
    object-fit: contain;
    z-index: 2;
    top: 0;
    right: 0;
    position: absolute;
  }
  .location {
    width: 100%;
    height: 28rem;
    object-fit: cover;
    z-index: 1;
    filter: grayscale(40%) blur(0.5px);
  }
  .title {
    font-family: linlibertine-italicbold;
    font-size: 3rem;
    max-width: 40rem;
    margin: -4rem 1rem 3rem;
    z-index: 3;
    padding: 1rem 2rem;
    background: ${props => props.theme.grey};
    line-height: 1.4;
    transform: rotate(-1deg) skew(-1deg);
    border-bottom: 4px solid ${props => props.theme.green};
    a {
      color: #fff;
      letter-spacing: -1px;
    }
  }
  p {
    font-size: 1.7rem;
    margin: 0.4rem;
    font-weight: 400;
    flex-grow: 1;
    padding: 0 3rem;
  }
  .language {
    border-bottom: 4px solid ${props => props.theme.green};
    text-transform: uppercase;
    font-family: linlibertine-bold;
  }
  .additional {
    font-family: linlibertine-italic;
  }

  .buttonList {
    display: grid;
    font-weight: 700;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 2px;

    & > * {
      letter-spacing: 1px;
      background: ${props => props.theme.grey};
      color: #fff;
      border: 0;
      padding: 1rem;
    }

    a {
      cursor: pointer;
      font-family: linlibertine-italicbold;
      border-bottom: 4px solid ${props => props.theme.green};
    }
  }
`;

export default StyledCourse;
