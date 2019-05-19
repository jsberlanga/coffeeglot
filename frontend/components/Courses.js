import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { StyledHeader } from "./styles/Header";

const ALL_COURSES_QUERY = gql`
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
    }
  }
`;

export default class Courses extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h2>Find a language course that suits you</h2>
        </StyledHeader>
        <Query query={ALL_COURSES_QUERY}>
          {({ data: { courses } }) => {
            console.log(courses);
            return (
              <div>
                <h3>course</h3>
                {courses.map(course => (
                  <ul key={course.id}>
                    <li>
                      <p>{course.title}</p>
                      <p>{course.details}</p>
                    </li>
                  </ul>
                ))}
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}
