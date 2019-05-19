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
            if (!data.teachers) return <p>There are no teachers</p>;
            const { teachers } = data;
            return (
              <div>
                <h3>course</h3>
                {teachers.map(teacher => (
                  <ul key={teacher.id}>
                    <li>
                      <p>{teacher.name}</p>
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
