import React from "react";

import "./CoursePane.css";

export const CoursePane = ({ courseData }) => {

  const toTitleCase = (string) => {
    return string.replace(string[0], string[0].toUpperCase());
  }

  return (
    <div className="pane">
      <div className="summary">
        <h3>{toTitleCase(courseData["course-type"])}</h3>
        <h1>{courseData.title}</h1>
        <>
          <p>{courseData.description}</p>
        </>
      </div>
      <div className="topics">
        <div className="topics-heading">
          <h2>Key Topics & Skills</h2>
        </div>
        {courseData.topics.map(topic => (
          <div className="topics-content" key={courseData.id+topic}>
            <p>{topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
