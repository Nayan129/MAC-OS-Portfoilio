import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <iframe
          src="/NAYAN-BHUSARI-CV.pdf"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </MacWindow>
  );
};

export default Resume;
