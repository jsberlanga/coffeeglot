import styled from "styled-components";

const SingleObjectStyle = styled.div`
  padding: 0.5rem 4rem 1rem 0;
  margin: 2rem auto 4rem;
  max-width: 120rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 5rem;
  background: ${props => props.theme.lightGrey2};
  box-shadow: 2px 2px 8px -6px ${props => props.theme.grey2};

  .image {
    display: flex;
    flex-direction: column;
  }
  .vote {
    position: relative;
    padding: 0 0 2rem 2rem;
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      margin-right: 1rem;
      font-size: 3.55rem;
      color: #ed1944;
      font-family: stylish;
    }
    :after {
      content: "";
      position: absolute;
      top: 90%;
      transition: all 0.3s ease;
      width: 5px;
      height: 5px;
      background: #ed1944;
      opacity: 0;
    }
    :hover:after {
      opacity: 1;
      transform: scaleX(35);
    }
    @keyframes scale {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.15);
      }
    }
    .icon {
      :hover {
        animation: scale 0.35s infinite ease-out;
      }
    }
  }

  .title {
    font-family: linlibertine-italicbold;
    font-size: 3rem;
    max-width: 50rem;
    text-align: center;
    z-index: 3;
    padding: 1rem 2rem;
    margin-bottom: 3rem;
    background: ${props => props.theme.yellow};
    line-height: 1.4;
    border-right: 8px solid ${props => props.theme.grey};
    border-left: 8px solid ${props => props.theme.grey};
  }

  .active {
    background: ${props => props.theme.green2};
    color: ${props => props.theme.lightGrey};
    border: none;
  }

  .inactive {
    background: maroon;
    color: #fff;
    border: none;
  }

  .isNative,
  .price {
    border-bottom: 4px solid ${props => props.theme.yellow};
    font-family: linlibertine-bold;
  }
  .avatar {
    width: 55rem;
    height: 40rem;
    object-fit: cover;
    filter: grayscale(30%);
    float: right;
    margin: 2rem;
  }
  .avatar__teacher {
    width: 50rem;
  }

  .teacher {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
    filter: grayscale(40%);
    float: right;
    border-radius: 50%;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 400;
    flex-grow: 1;
  }

  .courses-info {
    margin-top: 3rem;
  }

  a {
    :hover {
      border-bottom: 4px solid ${props => props.theme.yellow};
      color: ${props => props.theme.yellow};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  h2,
  h3,
  h4,
  h5,
  p,
  a,
  li {
    padding: 0.3rem 1rem;
  }
`;

export default SingleObjectStyle;
