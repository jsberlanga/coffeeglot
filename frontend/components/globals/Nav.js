import Link from "next/link";
import Router from "next/router";
import CurrentUser from "../CurrentUser";

import { AUTH_TOKEN } from "../../constants";

import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Stylish", sans-serif;
  font-size: 2rem;
  a,
  button,
  input {
    padding: 0rem 2rem;
    transition: all 0.14s ease;
    :hover {
      border-bottom: 5px solid ${props => props.theme.grey2};
      color: ${props => props.theme.grey2};
      transform: translateY(-6px);
      font-weight: bold;
    }
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

const Header = props => {
  return (
    <StyledNav>
      <CurrentUser>
        {({ data: { me } }) => {
          console.log(me);
          if (me) return <p>{me.email}</p>;
          return null;
        }}
      </CurrentUser>
      <Link href="/courses">
        <a>Courses</a>
      </Link>
      <Link href="/teachers">
        <a>Teachers</a>
      </Link>
      <Link href="/cafes">
        <a>Cafes</a>
      </Link>
      <Link href="/top">
        <a>Top</a>
      </Link>
      <Link href="/add">
        <a>Add Course</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </StyledNav>
  );
};

export default Header;
