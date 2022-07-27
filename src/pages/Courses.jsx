import React from 'react';
import { CoursePane } from '../components/coursePane/CoursePane';

import './Courses.css';

import courseData from '../data/courses.json';

const Courses = () => {

  console.log(courseData)
  return (
    <div className="course-list">
      {courseData.map(course => (
        <div className='course-pane' key={course.id+course.title}>
          <CoursePane courseData={course} />
        </div>
      ))}
    </div>
  )
}

export default Courses;