import React from "react";
import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./CurrentUser";
import { StyledHeader } from "./styles/Header";

const Profile = props => {
  return (
    <>
      <Query query={CURRENT_USER_QUERY} fetchPolicy="cache-and-network">
        {({ data }) => {
          console.log(data);
          const courses = data.me ? data.me.courses : null;
          console.log(courses);

          return (
            <>
              <StyledHeader>
                <h2>Check out your profile</h2>
              </StyledHeader>

              <>
                <h3>
                  At this moment you are teaching these {courses.length} course
                  {courses.length > 1 && "s"}:
                </h3>

                {courses.map(course => (
                  <div key={course.id}>
                    <h4>{course.title}</h4>
                  </div>
                ))}
              </>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Profile;
