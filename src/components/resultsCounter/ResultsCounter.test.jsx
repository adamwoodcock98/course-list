import React from "react";
import { screen, render } from "@testing-library/react";

import { ResultsCounter } from "./ResultsCounter";

describe("Results Counter", () => {
  it("should display a result count", () => {
    render(<ResultsCounter count={4} />);

    const prefix = screen.getByText("Showing");
    expect(prefix).toBeInTheDocument();

    const count = screen.getByText("4");
    expect(count).toBeInTheDocument();

    const suffix = screen.getByText("results");
    expect(suffix).toBeInTheDocument();
  });
});
