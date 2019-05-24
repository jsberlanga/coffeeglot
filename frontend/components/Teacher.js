import React from "react";
import SingleObjectStyle from "./styles/SingleObjectStyles";
import Link from "next/link";

const Teacher = props => {
  const { teacher } = props;
  return (
    <SingleObjectStyle>
      <div className="image">
        <img
          src={teacher.image}
          className="avatar avatar__teacher"
          alt="teacher"
        />
      </div>
      <div className="info">
        <h3 className="title">Name: {teacher.name}</h3>
        <p>
          {teacher.name} is {teacher.age} years old{" "}
          {teacher.isNative === "Yes" && (
            <span>
              and is a <span className="isNative">NATIVE SPEAKER!</span>
            </span>
          )}
        </p>

        <p>Education: {teacher.education}</p>
        <p>Experience: {teacher.experience}</p>
        <p>Certifications: {teacher.certifications}</p>
        <p>Something more: {teacher.about}</p>
        <h4>Number of votes: {teacher.votes.length}</h4>
        <div className="courses-info">
          <h4>Checkout all of {teacher.name}'s courses:</h4>
          {teacher.createdBy.courses.map(course => (
            <li key={course.id}>
              <Link href={`/course?id=${course.id}`}>
                <a>{course.title}</a>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </SingleObjectStyle>
  );
};

export default Teacher;
