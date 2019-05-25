import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { StyledHeader } from "./styles/Header";
import Teacher from "./Teacher";

const ALL_TEACHERS_QUERY = gql`
  query ALL_TEACHERS_QUERY {
    teachers {
      id
      name
      age
      isNative
      image
      about
      experience
      education
      certifications
      createdBy {
        id
        courses {
          id
          title
        }
      }
      votes {
        user {
          id
        }
      }
    }
  }
`;

export default class Teachers extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h2>Find all about our teachers</h2>
        </StyledHeader>
        <Query query={ALL_TEACHERS_QUERY}>
          {({ data }) => {
            console.log(data);
            if (!data) return <p>There are no teachers</p>;
            const { teachers } = data;
            return (
              <>
                {teachers.map(teacher => (
                  <Teacher key={teacher.id} teacher={teacher} />
                ))}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}
