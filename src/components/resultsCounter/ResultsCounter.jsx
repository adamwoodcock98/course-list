import React from "react";

import "./ResultsCounter.css";

export const ResultsCounter = ({ count }) => {
  return (
    <div className="count">
      <p>Showing&nbsp;</p>
      <p style={{ fontWeight: "bold" }}>{count}&nbsp;</p>
      <p>results</p>
    </div>
  );
};
