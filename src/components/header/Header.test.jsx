import React from "react";
import { screen, render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should render a header component", () => {
    render(
      <Header path="Root / Page" title="A page" description="Lorem ipsum..." />
    );

    const path = screen.getByText("Root / Page");
    expect(path).toBeInTheDocument();

    const title = screen.getByText("A page");
    expect(title).toBeInTheDocument();

    const description = screen.getByText("Lorem ipsum...");
    expect(description).toBeInTheDocument();
  });
});
