import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { languages, locations } from "../lib/data";
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
  .left {
    background: ${props => props.theme.green};
    padding: 3rem;
    color: ${props => props.theme.offWhite};
  }
  .right {
    background: ${props => props.theme.green2};
    padding: 3rem;
    color: ${props => props.theme.grey};
  }

  margin: 0 auto;
  box-shadow: 10px 10px 0px 0px ${props => props.theme.grey2};
  font-size: 2rem;
  max-width: 120rem;
  background: ${props => props.theme.green2};
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
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
    float: right;
    font-family: linlibertine-italicbold;
    background: ${props => props.theme.grey2};
    color: #fff;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.grey};
    }
  }
  h2,
  h3,
  h4,
  h5 {
    font-family: linlibertine-italicbold;
  }
`;

export default class CreateCourse extends Component {
  state = {
    title: "",
    details: "",
    price: "",
    locations: "",
    language: "",
    about: "",
    experience: "",
    schedule: ""
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
    const {
      title,
      details,
      price,
      language,
      about,
      experience,
      schedule
    } = this.state;
    return (
      <>
        <h2
          style={{ textAlign: "center", fontFamily: "linlibertine-italicbold" }}
        >
          Hi ***name***! Create your own Course
        </h2>
        <Mutation mutation={CREATE_COURSE_MUTATION} variables={this.state}>
          {createCourse => {
            return (
              <StyledForm onSubmit={e => this.handleSubmit(e, createCourse)}>
                <div className="left">
                  <h4>Tell us about the course</h4>
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
                  <label htmlFor="details">
                    Details
                    <textarea
                      rows="3"
                      id="details"
                      name="details"
                      placeholder="Add additional details about the course"
                      required
                      value={details}
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
                  {language === "Spanish" && <p>YO SOY</p>}
                  <label htmlFor="location">
                    Location
                    <select name="location" onChange={this.handleChange}>
                      {locations.map(location => (
                        <option key={location.name} value="`fuck me`">
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="right">
                  <h4>Tell us about yourself</h4>
                  <label htmlFor="file">
                    Image
                    <input
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Upload an image"
                      required
                      onChange={this.uploadFile}
                    />
                  </label>
                  <label htmlFor="about">
                    About you
                    <textarea
                      rows="3"
                      id="about"
                      name="about"
                      placeholder="Add additional information about yourself"
                      required
                      value={about}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="experience">
                    Professional Experience:
                    <textarea
                      rows="3"
                      id="experience"
                      name="experience"
                      placeholder="Your Experience"
                      required
                      value={experience}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="schedule">
                    Schedule Information
                    <input
                      type="text"
                      id="schedule"
                      name="schedule"
                      placeholder="Share your schedule information"
                      required
                      value={schedule}
                      onChange={this.handleChange}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </div>
              </StyledForm>
            );
          }}
        </Mutation>
      </>
    );
  }
}
