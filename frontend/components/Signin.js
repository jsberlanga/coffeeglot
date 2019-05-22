import React, { Component } from "react";
import styled from "styled-components";
import { StyledHeader } from "./styles/Header";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import { AUTH_TOKEN } from "../constants";

import SignupForm from "./styles/SignupForm";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export default class Signin extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup;
    console.log(data);
    console.log(token);
    this._saveUserData(token);
    this.props.history.push(`/`);
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  render() {
    const { login, email, password } = this.state;
    return (
      <>
        <StyledHeader>
          <h2>Do you already have an account?</h2>
        </StyledHeader>
        <SignupForm>
          <form className="form">
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
            <Mutation
              mutation={SIGNIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data => this._confirm(data)}
            >
              {(mutation, { data }) => {
                console.log(`The token is to be found in ${data}`);
                return (
                  <button
                    className="form-button"
                    type="submit"
                    onClick={() => this.setState({ login: !login })}
                  >
                    Signin
                  </button>
                );
              }}
            </Mutation>
          </form>
        </SignupForm>
      </>
    );
  }
}
