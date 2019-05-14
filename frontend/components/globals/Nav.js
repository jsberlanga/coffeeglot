import Link from "next/link";
import Router from "next/router";

import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Stylish", sans-serif;
  font-size: 2.5rem;
  a,
  button,
  input {
    padding: 1rem 2rem;
  }

  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: capitalize;
    border: 0;
  }
`;

const Header = props => (
  <StyledNav>
    <Link href="/courses">
      <a>Courses</a>
    </Link>
    <Link href="/teachers">
      <a>Teachers</a>
    </Link>
    <Link href="/cafes">
      <a>Cafes</a>
    </Link>
    <Link href="/add">
      <a>Add</a>
    </Link>
    <Link href="/map">
      <a>Map</a>
    </Link>
    <Link href="/profile">
      <a>Account</a>
    </Link>
    {/* <Link href="/signup">
      <a>Signup</a>
    </Link> */}
  </StyledNav>
);

export default Header;
