import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { languages } from "../lib/data";
import Router from "next/router";

const CREATE_COURSE_MUTATION = gql`
  mutation CREATE_COURSE_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $language: String!
  ) {
    createCourse(
      title: $title
      description: $description
      price: $price
      language: $language
    ) {
      id
    }
  }
`;

const StyledForm = styled.form`
  * {
    font-family: linlibertine-bold;
    letter-spacing: 1px;
  }

  margin: 0 auto;
  box-shadow: 5px 5px 10px -7px ${props => props.theme.grey};
  padding: 5rem;
  font-size: 2rem;
  max-width: 80rem;
  background: ${props => props.theme.blue};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: ${props => props.theme.grey};
  }

  input,
  textarea,
  select,
  option {
    width: 100%;
    font-size: 1.6rem;
    padding: 2rem;
    border: none;
    background: ${props => props.theme.lightBlue};
    color: ${props => props.theme.grey2};
    border-radius: 0.4rem;
    margin-top: 0.4rem;
    resize: none;
    &:focus {
      filter: contrast(95%);
      outline: none;
    }
    ::placeholder {
      color: ${props => props.theme.grey2};
    }
  }

  button {
    width: 50%;
    border: 0;
    font-size: 2.8rem;
    border-radius: 0.4rem;
    margin: 2rem auto;
    padding: 2.4rem;
    font-family: linlibertine-italicbold;
    background: ${props => props.theme.grey2};
    color: #fff;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.grey};
    }
  }
`;

export default class CreateCourse extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    language: ""
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  handleSubmit = async (e, createCourse) => {
    e.preventDefault();
    const res = await createCourse();
    Router.push({
      pathname: "/course",
      query: { id: res.data.createCourse.id }
    });
  };
  render() {
    const { title, description, price, language } = this.state;
    return (
      <>
        <h2
          style={{ textAlign: "center", fontFamily: "linlibertine-italicbold" }}
        >
          Create your own Course
        </h2>
        <Mutation mutation={CREATE_COURSE_MUTATION} variables={this.state}>
          {createCourse => {
            return (
              <StyledForm onSubmit={e => this.handleSubmit(e, createCourse)}>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="description">
                  Description
                  <textarea
                    rows="3"
                    id="description"
                    name="description"
                    placeholder="Enter a description"
                    required
                    value={description}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="price">
                  Price
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price must be in cents"
                    required
                    value={price}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="language">
                  Language
                  <select
                    id="language"
                    name="language"
                    onChange={this.handleChange}
                  >
                    {languages.map(language => (
                      <option
                        key={language}
                        value={language}
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80)"
                        }}
                      >
                        {language}
                      </option>
                    ))}
                  </select>
                </label>
                <button type="submit">Submit</button>
              </StyledForm>
            );
          }}
        </Mutation>
      </>
    );
  }
}
