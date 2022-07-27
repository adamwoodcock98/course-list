import React from "react";

export const Header = ({ path, title, description }) => {
  return (
    <>
      <h3>{path}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};
