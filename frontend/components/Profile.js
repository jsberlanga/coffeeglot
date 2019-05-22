import React from "react";
import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./CurrentUser";
import { StyledHeader } from "./styles/Header";

const Profile = props => {
  return (
    <>
      <Query query={CURRENT_USER_QUERY}>
        {({ data }) => {
          console.log(data);
          return (
            <>
              <StyledHeader>
                <h2>Check out your profile</h2>
              </StyledHeader>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Profile;
