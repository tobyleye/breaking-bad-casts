import React from "react";

const Spinner = ({ width }) => {
  return (
    <div className="spinner">
      <img
        style={{ width: `${width}px` }}
        src="https://github.com/bradtraversy/breaking-bad-cast/blob/master/src/img/spinner.gif?raw=true"
        alt="loading..."
      />
    </div>
  );
};

export default Spinner;
