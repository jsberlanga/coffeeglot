import React, { Component } from "react";
import styled from "styled-components";
import { StyledHeader } from "./styles/Header";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import SignupForm from "./styles/SignupForm";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export default class Signup extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async (e, signup) => {
    e.preventDefault();
    const res = await signup();
    console.log(res);
    this.setState({ email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;

    return (
      <>
        <StyledHeader>
          <h2>Sign up for an account</h2>
        </StyledHeader>
        <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
          {(signup, { error, loading }) => {
            return (
              <SignupForm>
                <form
                  className="form"
                  method="post"
                  onSubmit={e => this.handleSubmit(e, signup)}
                >
                  <div className="form-item">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Email"
                      aria-label="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-item">
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Password"
                      aria-label="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button className="form-button" type="submit">
                    Signup
                  </button>
                </form>
              </SignupForm>
            );
          }}
        </Mutation>
      </>
    );
  }
}
