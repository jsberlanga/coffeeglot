import React, { Component } from "react";
import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { findLocationPicture, findLocationAddress } from "../lib/findInfo";
import { findDate, compareDates } from "../lib/findDate";

import { StyledHeader } from "./styles/Header";
import StyledTeacher from "./styles/TeacherStyles";

const SINGLE_COURSE_QUERY = gql`
  query SINGLE_COURSE_QUERY($id: ID!) {
    getCourse(id: $id) {
      id
      title
      details
      price
      language
      location
      seats
      startDate
      endDate
    }
  }
`;

const SingleCourse = props => {
  console.log(props);
  return (
    <Query query={SINGLE_COURSE_QUERY} variables={{ id: props.id }}>
      {({ data: { getCourse: course } }, loading, error) => {
        console.log(course);
        return (
          <>
            <StyledHeader>
              <h2>{course.title}</h2>
            </StyledHeader>
            <StyledTeacher>
              <div className="image">
                <img
                  src={findLocationPicture(course.location)}
                  className="avatar avatar__location"
                  alt="location"
                />
              </div>
              <div className="info">
                <h3 className="title">{course.language} Language Course </h3>
                <h5>
                  Duration of this course:{" "}
                  {compareDates(course.startDate, course.endDate)}. For only{" "}
                  <span className="price">{course.price} zlotys</span>
                </h5>
                <p>This course will be carried in {course.language}</p>
                <p>
                  Where: {course.location} in{" "}
                  {findLocationAddress(course.location)}
                </p>
                <p>Some more: {course.details}</p>
                <p>Total number of seats: {course.seats}</p>
                <h4>Remaining seats: to be done</h4>
                <h4>To register: to be done</h4>

                {findDate(course.startDate)}
              </div>
            </StyledTeacher>
          </>
        );
      }}
    </Query>
  );
};

export default SingleCourse;
