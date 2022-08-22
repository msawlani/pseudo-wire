import React, { useState } from "react";
import CodeEditor from "../../Shared/Editor/Editor";

import "./Home.css";

const Home = () => {
  return (
    <div className="landingPage">
      <div className="text-center">
        <h2 className="title">Welcome to Pesudo Wire</h2>
        <h5 className="text-white">
          Where even a 5th Grader can learn to code!
        </h5>
      </div>
      <h3 className="text-white">Javascript</h3>
      <div className="editor">
        <CodeEditor
          readOnly={true}
          content={`let array = ["H", "e", "l", "l", "o"]; 

  for (let i = 0; i < array.length; i++ ){
        console.log(array[i]);
  };`}
        />
      </div>
    </div>
  );
};

export default Home;
