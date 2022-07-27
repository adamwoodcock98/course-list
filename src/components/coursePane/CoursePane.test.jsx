import React from "react";
import { screen, render } from "@testing-library/react";

import { CoursePane } from "./CoursePane";

const dummyCourse = {
  "id": 1,
  "course-type": "core",
  "title": "Marketing Course",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "topics": [
    "Topic One",
    "Topic Two",
    "Topic Three",
    "Topic Four"
  ]
}

describe("CoursePane", () => {
  it("should render course pane component", () => {
    render(<CoursePane courseData={dummyCourse} />);

    const type = screen.getByText("Core");
    expect(type).toBeInTheDocument();

    const title = screen.getByText("Marketing Course");
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/Lorem ipsum dolor/);
    expect(description).toBeInTheDocument();

    const topicsHeading = screen.getByText("Key Topics & Skills");
    expect(topicsHeading).toBeInTheDocument();

    const topicOne = screen.getByText("Topic One");
    expect(topicOne).toBeInTheDocument();

    const topicTwo = screen.getByText("Topic Two");
    expect(topicTwo).toBeInTheDocument();

    const topicThree = screen.getByText("Topic Three");
    expect(topicThree).toBeInTheDocument();

    const topicFour = screen.getByText("Topic Four");
    expect(topicFour).toBeInTheDocument();
  });
});
