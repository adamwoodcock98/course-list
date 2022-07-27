import React from 'react';

import './CoursePane.css'

export const CoursePane = ({courseData}) => {
  return(
    <div className="pane">
      <div className="summary">
        <h3>Type</h3>
        <h1>Title</h1>
        <>
          <p>Description</p>
        </>
      </div>
      <div className="topics">
        <div className="topics-heading">
          <h2>Key Topics & Skills</h2>
        </div>
        <div className="topics-content">
          <p>Topic One</p>
        </div>
      </div>
    </div>
  )
}