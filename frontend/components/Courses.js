import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_COURSES_QUERY = gql`
  query ALL_COURSES_QUERY {
    courses {
      id
      title
      description
      price
      language
      image
    }
  }
`;

export default class Courses extends Component {
  render() {
    return (
      <>
        <h2
          style={{ textAlign: "center", fontFamily: "linlibertine-italicbold" }}
        >
          Language Courses for English Speakers
        </h2>
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
                      <p>{course.description}</p>
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
