import React from "react";
import StyledTeacher from "./styles/TeacherStyles";

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
      </div>
    </StyledTeacher>
  );
};

export default Teacher;
