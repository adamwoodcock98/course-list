import React, { useState } from "react";
import { CoursePane, Header, Dropdown, ResultsCounter } from "../components";

import "./Courses.css";

import courseData from "../data/courses.json";

const Courses = () => {
  const [selected, setSelected] = useState("");
  const [courses, setCourses] = useState(courseData);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setCourses(updateCourses(e.target.value));
  };

  const handleClear = () => {
    setSelected("");
    setCourses(courseData);
  };

  const updateCourses = (selection) =>
    courseData.filter((course) =>
      selection ? course["course-type"] === selection : course
    );

  const uniqueOptions = [
    ...new Set(courseData.map((course) => course["course-type"])),
  ];

  return (
    <>
      <div className="wide">
        <Header
          path="Hult / Courses"
          title="Courses"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div className="wide">
        <Dropdown
          options={uniqueOptions}
          value={selected}
          handleChange={handleChange}
          handleClear={handleClear}
        />
      </div>
      <div className="wide">
        <ResultsCounter count={courses.length} />
      </div>
      <div className="course-list wide">
        {courses.map((course) => (
          <div className="course-pane" key={course.id + course.title}>
            <CoursePane courseData={course} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
