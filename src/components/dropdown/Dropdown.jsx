import React from "react";

export const Dropdown = ({ options, changeHandler, value }) => {
  return (
    <select
      value={value}
      onChange={changeHandler}
      defaultValue=""
      aria-label="Filter courses"
    >
      <option value="" disabled>Please select</option>
      {options.map((option) => (
        <option value="option" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
