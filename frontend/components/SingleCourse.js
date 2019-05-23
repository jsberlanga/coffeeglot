import React, { Component } from "react";
import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { findFlag, findLocation } from "../lib/findInfo";

import moment from "moment";
const now = moment();

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
        const startDateMoment = moment(course.startDate);
        console.log(course);
        return (
          <>
            <h1>Title: {course.title}</h1>
            <img src={findLocation(course.location)} width="500" />
            <p>details: {course.details}</p>
            <p>price: {course.price}</p>
            <p>language: {course.language}</p>
            <p>seats: {course.seats}</p>

            {startDateMoment.diff(now, "days") < 0 ? (
              <h2>This course has started already.</h2>
            ) : (
              <h3>
                This course starts in {startDateMoment.diff(now, "days")} days.
                Go ahead and REGISTER NOW!{" "}
              </h3>
            )}
          </>
        );
      }}
    </Query>
  );
};

export default SingleCourse;
