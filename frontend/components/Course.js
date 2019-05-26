import React, { Component } from "react";
import Link from "next/link";
import StyledCourse from "./styles/CourseStyles";

import { findFlag, findLocationPicture } from "../lib/findInfo";
import Error from "./styles/Error";
import Spinner from "./styles/Spinner";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ENROLL_COURSE_MUTATION = gql`
  mutation ENROLL_COURSE_MUTATION($courseId: ID!) {
    enroll(courseId: $courseId) {
      id
    }
  }
`;

export default class Course extends Component {
  render() {
    const { course } = this.props;

    return (
      <StyledCourse>
        <img
          src={findFlag(course.language)}
          alt={course.title}
          className="flag"
        />
        <img
          src={findLocationPicture(course.location)}
          alt={course.location}
          className="location"
        />
        <div className="title">
          <Link
            href={{
              pathname: "/course",
              query: { id: course.id }
            }}
          >
            <a>{course.title}</a>
          </Link>
        </div>
        <p>
          The language taught in this course is{" "}
          <span className="language">{course.language}</span>
        </p>
        <p>Price of this course: {course.price} PLN</p>
        <p>The location of this course: {course.location}</p>
        <p>Max. number of students: {course.seats}</p>
        <p className="additional">Additional information: {course.details}</p>
        <div className="buttonList">
          <Mutation
            mutation={ENROLL_COURSE_MUTATION}
            variables={{ courseId: course.id }}
          >
            {(enroll, { error, loading }) => {
              if (error)
                return (
                  <Error styles={{ position: "absolute" }} error={error} />
                );
              if (loading) return <Spinner />;
              return (
                <a className="register" onClick={() => enroll()}>
                  Enroll to this course
                </a>
              );
            }}
          </Mutation>
          <Link
            href={{
              pathname: "/course",
              query: { id: course.id }
            }}
          >
            <a className="details">Read all the details about this course</a>
          </Link>
        </div>
      </StyledCourse>
    );
  }
}
