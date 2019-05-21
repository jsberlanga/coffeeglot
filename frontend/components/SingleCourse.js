import React, { Component } from "react";
import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
            <h1>Title: {course.title}</h1>
            <p>details: {course.details}</p>
            <p>price: {course.price}</p>
            <p>language: {course.language}</p>
            <p>seats: {course.seats}</p>
          </>
        );
      }}
    </Query>
  );
};

export default SingleCourse;
