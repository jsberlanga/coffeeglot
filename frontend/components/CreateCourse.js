import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { languages } from "../lib/languages";
import Router from "next/router";

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
`;

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

export default class CreateCourse extends Component {
  state = {
    title: "",
    description: "",
    price: 0,
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
      <Mutation mutation={CREATE_COURSE_MUTATION} variables={this.state}>
        {createCourse => {
          return (
            <StyledForm onSubmit={e => this.handleSubmit(e, createCourse)}>
              <h2>Create your own Course</h2>
              <fieldset>
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
                    id="description"
                    name="description"
                    placeholder="Enter A Description"
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
                  <select name="language" onChange={this.handleChange}>
                    {languages.map(language => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </select>
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </StyledForm>
          );
        }}
      </Mutation>
    );
  }
}
