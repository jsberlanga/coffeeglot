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
        <div>{course.price}</div>
        <p>Description: {course.details}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat
          recusandae eligendi fugit itaque dicta ipsam necessitatibus aperiam
          cumque repudiandae!
        </p>

        <p>
          <span style={{ fontWeight: 700, textTransform: "uppercase" }}>
            {course.language}
          </span>
        </p>
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
