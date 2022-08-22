import React from "react";
import "./OutputWindow.css";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="text-red">{atob(outputDetails?.compile_output)}</pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="text-green">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return <pre className="text-red">{`Time Limit Exceeded`}</pre>;
    } else {
      return <pre className="text-red">{outputDetails?.stderr}</pre>;
    }
  };
  return (
    <>
      <h1 className="text-white fw-bold">Output</h1>
      <div className="output text-white">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};

export default OutputWindow;
