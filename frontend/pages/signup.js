import React from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SignUpPage = () => {
  return (
    <Grid>
      <Signup />
      <Signin />
    </Grid>
  );
};

export default SignUpPage;
