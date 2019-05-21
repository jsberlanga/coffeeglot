import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { StyledHeader } from "./styles/Header";

const ALL_TEACHERS_QUERY = gql`
  query ALL_TEACHERS_QUERY {
    teachers {
      id
      name
      isNative
      image
      about
      experience
      education
      certifications
      courses {
        id
        title
        details
        price
      }
    }
  }
`;

export default class Teachers extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h2>Find all our teachers</h2>
        </StyledHeader>
        <Query query={ALL_TEACHERS_QUERY}>
          {({ data }) => {
            console.log(data.teachers);
            if (!data.teachers) return <p>There are no teachers</p>;
            const { teachers } = data;
            return (
              <div>
                {teachers.map(teacher => (
                  <ul key={teacher.id}>
                    <li>
                      <p>Name: {teacher.name}</p>
                      <p>Is Native Speaker?: {teacher.isNative}</p>
                      <img src={teacher.image} width="300" />
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
