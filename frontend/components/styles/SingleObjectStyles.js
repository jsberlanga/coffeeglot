import styled from "styled-components";

const SingleObjectStyle = styled.div`
  padding: 0.5rem 4rem 1rem 0;
  margin: 2rem auto 6rem;
  max-width: 120rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  border-bottom: 6px solid ${props => props.theme.grey2};
  background: ${props => props.theme.lightGrey2};
  box-shadow: 4px 4px 0px 4px ${props => props.theme.grey};

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
    width: 45rem;
    height: 45rem;
    object-fit: cover;
    filter: grayscale(40%);
    float: right;
  }
  .avatar__teacher {
    border-radius: 50%;
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
