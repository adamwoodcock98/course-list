import React from "react";
import { screen, render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("should render a navbar with an image", () => {
    render(<Navbar />);

    const image = screen.getByAltText(/Hult International/);
    expect(image).toBeInTheDocument();
  });
});
