import React from "react";
import { toTitleCase } from "../utils";

export const Dropdown = ({ options, handleChange, value, handleClear }) => {
  return (
    <>
      <select
        value={value}
        onChange={handleChange}
        defaultValue=""
        aria-label="Filter courses"
      >
        <option value="" disabled>Please select</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {toTitleCase(option)}
          </option>
        ))}
      </select>
      {value !== "" && <button onClick={handleClear}>Reset</button>}
    </>
  );
};
