import React from "react";
import { screen, render } from '@testing-library/react';

import { CoursePane } from './CoursePane';

describe('CoursePane', () => {
  it('should render course pane component', () => {
    render(<CoursePane />);

    const type = screen.getByText('Type');
    expect(type).toBeInTheDocument();

    const title = screen.getByText('Title');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('Description');
    expect(description).toBeInTheDocument();

    const topicsHeading = screen.getByText('Key Topics & Skills');
    expect(topicsHeading).toBeInTheDocument();

    const topicOne = screen.getByText('Topic One');
    expect(topicOne).toBeInTheDocument();
  })
})