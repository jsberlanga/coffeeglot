import React from "react";
import StyledTeacher from "./styles/TeacherStyles";
import Link from "next/link";

const Teacher = props => {
  const { teacher } = props;
  return (
    <StyledTeacher>
      <div className="image">
        <img src={teacher.image} className="teacher" alt="teacher" />
      </div>
      <div className="info">
        <h3>Name: {teacher.name}</h3>
        <p>Age: {teacher.age}</p>
        <p>Native Speaker: {teacher.isNative}</p>
        <p>Education: {teacher.education}</p>
        <p>Experience: {teacher.experience}</p>
        <p>Certifications: {teacher.certifications}</p>
        <div className="courses-info">
          <h4>Checkout their best courses:</h4>
          {teacher.createdBy.courses.map(course => (
            <li>
              <Link href={`/course?id=${course.id}`}>
                <a>{course.title}</a>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </StyledTeacher>
  );
};

export default Teacher;
