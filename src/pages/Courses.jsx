import React, { useState } from 'react';
import { CoursePane } from '../components/coursePane/CoursePane';
import { Dropdown } from '../components/dropdown/Dropdown';

import './Courses.css';

import courseData from '../data/courses.json';

const Courses = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  const uniqueOptions = [...new Set(courseData.map(course => course['course-type']))]

  console.log(courseData)
  return (
    <>
      <div className="wide">
        <Dropdown options={uniqueOptions} value={selected} changeHandler={handleChange}/>
      </div>
      <div className="course-list wide">
        {courseData.map(course => (
          <div className='course-pane' key={course.id+course.title}>
            <CoursePane courseData={course} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Courses;