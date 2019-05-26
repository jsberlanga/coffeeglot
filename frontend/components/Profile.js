import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./CurrentUser";
import Router from "next/router";
import { StyledHeader } from "./styles/Header";
import gql from "graphql-tag";
import Error from "./styles/Error";
import Spinner from "./styles/Spinner";

const DELETE_COURSE_MUTATION = gql`
  mutation DELETE_COURSE_MUTATION($id: ID!) {
    deleteCourse(id: $id) {
      id
    }
  }
`;

class Profile extends Component {
  render() {
    return (
      <>
        <Query query={CURRENT_USER_QUERY} fetchPolicy="cache-and-network">
          {({ data }) => {
            console.log(data);
            const courses = data.me ? data.me.courses : null;
            const coursesEnrolled = data.me ? data.me.coursesEnrolled : null;
            return (
              <>
                <StyledHeader>
                  <h2>Check out your profile</h2>
                </StyledHeader>
                <>
                  {courses && courses.length !== 0 && (
                    <h3>
                      {" "}
                      At this moment you are teaching {courses.length} course
                      {courses.length > 1 && "s"}:
                    </h3>
                  )}

                  {courses.map(course => (
                    <div key={course.id}>
                      <h4>{course.title}</h4>
                      <Mutation
                        mutation={DELETE_COURSE_MUTATION}
                        variables={{ id: course.id }}
                        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                      >
                        {(deleteCourse, { error, loading }) => {
                          if (error) return <Error error={error} />;
                          if (loading) return <Spinner />;
                          return (
                            <div key={course.id}>
                              <button
                                onClick={() => {
                                  if (
                                    confirm(
                                      "Are you sure you want to delete this course?"
                                    )
                                  ) {
                                    deleteCourse();
                                  }
                                  return null;
                                }}
                              >
                                DELETE COURSE
                              </button>
                            </div>
                          );
                        }}
                      </Mutation>
                    </div>
                  ))}
                  <h3>
                    {" "}
                    At this moment you are enrolled in {
                      coursesEnrolled.length
                    }{" "}
                    course
                    {coursesEnrolled.length > 1 && "s"}:
                  </h3>
                  {coursesEnrolled.map(courseEnrolled => (
                    <div key={courseEnrolled.course.id}>
                      <button
                        onClick={() =>
                          Router.push({
                            pathname: "/course",
                            query: { id: courseEnrolled.course.id }
                          })
                        }
                      >
                        Title:{courseEnrolled.course.title}
                      </button>
                    </div>
                  ))}
                </>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Profile;
