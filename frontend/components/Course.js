import React, { Component } from "react";
import Link from "next/link";
import StyledCourse from "./styles/CourseStyles";

import { findFlag, findLocationPicture } from "../lib/findInfo";

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
          <Link
            href={{
              pathname: "/signup"
            }}
          >
            <a className="register">Register</a>
          </Link>
          <Link
            href={{
              pathname: "/course",
              query: { id: course.id }
            }}
          >
            <a className="details">Details</a>
          </Link>
        </div>
      </StyledCourse>
    );
  }
}
