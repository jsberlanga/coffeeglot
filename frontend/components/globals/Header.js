import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";

import Search from "./Search";
import Nav from "./Nav";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.div`
  padding: 1rem;
  margin: 0 3rem;
  a,
  button,
  img {
    cursor: pointer;
    color: ${props => props.theme.offBlack};
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left {
    display: flex;
    align-items: center;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="left">
      <Link href="/">
        <img src="/static/icons/logo.png" alt="logo" width="120" />
      </Link>
      <Search />
    </div>
    <Nav />
  </StyledHeader>
);

export default Header;
