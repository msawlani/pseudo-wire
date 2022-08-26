import React, { useState } from "react";
import CodeEditor from "../../Shared/Editor/Editor";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="title">Welcome to Pesudo Wire</h2>
        <h5 className="text-white">
          Where even a 5th Grader can learn to code!
        </h5>
      </div>
      <div className="text-center text-white">
        <h1>Search</h1>
        <input placeholder="What are you looking for?" />
      </div>
      <div className="container bg-primary">
        <div className="row justify-content-center">
          <div className="col-12">
            <CodeEditor
              readOnly={true}
              scroll={false}
              language={"java"}
              content={`let array = ["H", "e", "l", "l", "o"]; 

  for (let i = 0; i < array.length; i++ ){
        console.log(array[i]);
  };`}
            />
          </div>
          <div className="col-12 col-sm-2 text-white">
            <h3>Java</h3>
            <ul>
              <li>Learn</li>
              <li>Reference</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-success">
        <div className="row justify-content-center">
          <div className="col-12">
            <CodeEditor
              readOnly={true}
              scroll={false}
              language={"typescript"}
              content={`let array = ["H", "e", "l", "l", "o"]; 

  for (let i = 0; i < array.length; i++ ){
        console.log(array[i]);
  };`}
            />
          </div>
          <div className="col-12 col-sm-2 text-white">
            <h3>TypeScript</h3>
            <ul>
              <li>Learn</li>
              <li>Reference</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-primary">
        <div className="row justify-content-center">
          <div className="col-12">
            <CodeEditor
              readOnly={true}
              scroll={false}
              content={`let array = ["H", "e", "l", "l", "o"]; 

  for (let i = 0; i < array.length; i++ ){
        console.log(array[i]);
  };`}
            />
          </div>
          <div className="col-12 col-sm-2 text-white">
            <h3>JavaScript</h3>
            <ul>
              <li>Learn</li>
              <li>Reference</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
