import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import { StyledHeader } from "./styles/Header";
import Course from "./Course";

export const ALL_COURSES_QUERY = gql`
  query ALL_COURSES_QUERY {
    courses {
      id
      title
      details
      price
      language
      location
      seats
      startDate
      endDate
      createdBy {
        id
      }
    }
  }
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default class Courses extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h2>Find a language course that suits you</h2>
        </StyledHeader>
        <Query query={ALL_COURSES_QUERY} fetchPolicy="cache-and-network">
          {({ data: { courses }, error, loading }) => {
            console.log(courses);
            if (error)
              return <h4>The following message appeared: {error.message}</h4>;
            if (loading) return <h4>Loading...</h4>;
            return (
              <CourseList>
                {courses.map(course => (
                  <Course key={course.id} course={course} />
                ))}
              </CourseList>
            );
          }}
        </Query>
      </>
    );
  }
}
