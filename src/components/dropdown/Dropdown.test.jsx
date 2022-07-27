import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dropdown } from "./Dropdown";

const options = ["core", "business-challenge", "capstone", "elective"];

describe("Dropdown", () => {
  it("should set the correct default option", () => {
    render(<Dropdown options={options} />);

    const defaultOption = screen.getByRole("option", { name: "Please select" });
    expect(defaultOption.selected).toBe(true);
    expect(defaultOption.disabled).toBe(true);
  });

  it("should display the correct number of options (including default)", () => {
    render(<Dropdown options={options} />);

    const optionsCount = screen.getAllByRole("option").length;
    expect(optionsCount).toEqual(5);
  });

  it("should allow selection of an option", () => {
    render(<Dropdown options={options} />);

    const dropdownMenu = screen.getByRole("combobox");
    const capstone = screen.getByRole("option", { name: "Capstone" });

    userEvent.selectOptions(dropdownMenu, capstone);

    expect(capstone.selected).toBe(true);
  });
});
