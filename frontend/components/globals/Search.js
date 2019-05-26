import React from "react";
import styled from "styled-components";
import { ApolloConsumer, Query } from "react-apollo";
import gql from "graphql-tag";

const SEARCH_COURSES_QUERY = gql`
  query SEARCH_COURSES_QUERY($filter: String!) {
    courses(filter: $filter) {
      id
      title
      price
      language
      location
      startDate
      createdBy {
        id
        image
      }
    }
  }
`;

const StyledSearch = styled.input`
  font-family: "Stylish", sans-serif;
  display: flex;
  width: 40rem;
  padding: 2rem;
  background: transparent;
  border: none;
  font-size: 2.4rem;
  outline: none;

  ::placeholder {
    font-style: italic;
    color: ${props => props.theme.green2};
  }
  :focus {
    background: #e8e8e8;
  }
`;

class Search extends React.Component {
  render() {
    return (
      <div>
        <StyledSearch type="text" placeholder="Search for a language course" />
      </div>
    );
  }
}

export default Search;
