import React from "react";
import "./Subject.css";

function Subject({ title, value }) {
  return (
    <div className="subject">
      <div className="title__value">
        <div className="subject__title">{title}</div>
        <div className="subject__value">{value}</div>
      </div>
    </div>
  );
}

export default Subject;
