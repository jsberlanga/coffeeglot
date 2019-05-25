import React from "react";
import styled from "styled-components";

const ErrorStyles = styled.div`
  text-align: center;
  background: ${props => props.theme.yellow};
  font-size: 2rem;
  padding: 0.4rem;
  max-width: 50rem;
  margin: 2rem;
`;

const DisplayErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  return (
    <ErrorStyles>{error.message.replace("GraphQL error: ", "")}</ErrorStyles>
  );
};

export default DisplayErrorMessage;
