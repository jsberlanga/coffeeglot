import React from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

const SignUpPage = () => {
  return (
    <>
      <Signup title="Sign up for an account!" />
      <Signin title="Do you already have an account?" />
    </>
  );
};

export default SignUpPage;
