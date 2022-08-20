import React from "react";
import Editor from "./Editor/CompleteEditor";

import "./Home.css";

const Home = () => {
  return (
    <div className="landingPage">
      <div className="text-center">
        <h2 className="title">Welcome to Pesudo Wire</h2>
        <h5 className="text-white">Anyone can learn to code and be informed</h5>
      </div>
      <Editor />
    </div>
  );
};

export default Home;
