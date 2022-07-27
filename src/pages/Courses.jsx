import React, { useState } from "react";
import { CoursePane } from "../components/coursePane/CoursePane";
import { Dropdown } from "../components/dropdown/Dropdown";

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
        <Dropdown
          options={uniqueOptions}
          value={selected}
          handleChange={handleChange}
          handleClear={handleClear}
        />
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
