import React, { Component } from "react";
import styled from "styled-components";
import { StyledHeader } from "./styles/Header";

import SignupForm from "./styles/SignupForm";

export default class Signup extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h2>Sign up for an account</h2>
        </StyledHeader>
        <SignupForm>
          <form className="form">
            <div className="form-item">
              <input
                type="text"
                className="form-input"
                placeholder="Email"
                aria-label="email"
              />
            </div>
            <div className="form-item">
              <input
                type="password"
                className="form-input"
                placeholder="Password"
                aria-label="password"
              />
            </div>
            <button className="form-button" type="submit">
              Signup
            </button>
          </form>
        </SignupForm>
      </>
    );
  }
}
