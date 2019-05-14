import React from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  font-family: "Stylish", sans-serif;
  display: flex;
  width: 50rem;
  padding: 2rem;
  background: transparent;
  border: none;
  font-size: 2.6rem;
  outline: none;
  ::placeholder {
    font-style: italic;
    color: ${props => props.theme.green2};
  }
`;

class Search extends React.Component {
  render() {
    return (
      <div>
        <StyledSearch
          type="text"
          placeholder="Search for a course, cafe or teacher..."
        />
      </div>
    );
  }
}

export default Search;
