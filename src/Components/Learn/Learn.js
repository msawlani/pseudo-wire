import React from "react";
import { Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div>
      <h1>Learn</h1>
      <Outlet />
    </div>
  );
};

export default Learn;
