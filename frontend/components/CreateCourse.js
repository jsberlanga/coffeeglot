import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { languages, locations } from "../lib/data";
import Router from "next/router";

import { StyledForm } from "./styles/Form";
import { StyledHeader } from "./styles/Header";
import DayPicker from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const CREATE_COURSE_MUTATION = gql`
  mutation CREATE_COURSE_MUTATION(
    $title: String!
    $details: String!
    $price: Int!
    $language: String!
    $location: String!
    $seats: Int!
    $startDate: String!
    $endDate: String!
  ) {
    createCourse(
      title: $title
      details: $details
      price: $price
      language: $language
      location: $location
      seats: $seats
      startDate: $startDate
      endDate: $endDate
    ) {
      id
    }
  }
`;

export default class CreateCourse extends Component {
  state = {
    title: "",
    details: "",
    price: "",
    language: "",
    location: "",
    seats: "",
    isNative: undefined,
    about: "",
    experience: "",
    education: "",
    certifications: "",
    startDate: undefined,
    endDate: undefined
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
  handleDayClick = day => {
    this.setState({ selectedDay: day });
  };
  render() {
    const {
      title,
      details,
      price,
      about,
      experience,
      seats,
      education,
      certifications,
      isNative
    } = this.state;
    return (
      <>
        <StyledHeader>
          <h2>Go ahead and create your own course</h2>
        </StyledHeader>
        <Mutation mutation={CREATE_COURSE_MUTATION} variables={this.state}>
          {createCourse => {
            return (
              <StyledForm onSubmit={e => this.handleSubmit(e, createCourse)}>
                <div className="left">
                  <h4>Tell us about the course</h4>
                  <label htmlFor="title">
                    <span>Title</span>
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
                    <span>Details</span>
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
                    <span>Price</span>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price in cents"
                      required
                      value={price}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="language">
                    <span>Language</span>
                    <select name="language" onChange={this.handleChange}>
                      {languages.map(language => (
                        <option
                          key={language.language}
                          value={language.language}
                        >
                          {language.language}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label htmlFor="location">
                    <span>Location</span>
                    <select name="location" onChange={this.handleChange}>
                      {locations.map(location => (
                        <option key={location.name} value={location.name}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label htmlFor="seats">
                    <span>Number of seats</span>
                    <input
                      type="number"
                      id="seats"
                      name="seats"
                      placeholder="Maximum number of seats"
                      required
                      value={seats}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="date" id="date">
                    <span>Date</span>
                    <DayPicker
                      onDayChange={day => this.setState({ startDate: day })}
                      value={this.state.startDate}
                      placeholder="From"
                    />
                    <DayPicker
                      onDayChange={day => this.setState({ endDate: day })}
                      value={this.state.endDate}
                      placeholder="To"
                    />
                  </label>
                </div>
                <div className="right">
                  <h4>Tell us about yourself</h4>
                  <label htmlFor="file">
                    <span>Image</span>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Upload an image"
                      required
                      onChange={this.uploadFile}
                    />
                  </label>
                  <label htmlFor="isNative">
                    <span>Native Speaker?</span>
                    <select name="isNative" onChange={this.handleChange}>
                      <option value="">Please choose an option</option>
                      <option key={isNative} value={isNative}>
                        Yes
                      </option>
                      <option key={isNative} value={isNative}>
                        No
                      </option>
                    </select>
                  </label>
                  <label htmlFor="about">
                    <span>About you</span>
                    <textarea
                      rows="3"
                      id="about"
                      name="about"
                      placeholder="Add additional information about yourself, interests, etc."
                      required
                      value={about}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="experience">
                    <span>Professional Experience</span>
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
                  <label htmlFor="education">
                    <span>Education</span>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      placeholder="Education"
                      required
                      value={education}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="certifications">
                    <span>Certifications</span>
                    <input
                      type="text"
                      id="certifications"
                      name="certifications"
                      placeholder="Certifications"
                      required
                      value={certifications}
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
