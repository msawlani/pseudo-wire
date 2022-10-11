import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const LearnDetails = (props) => {
  let { link_id } = useParams();

  const item = useSelector((state) => state.links[link_id]);

  console.table(item);

  return (
    <div>
      <h1>{item.language}</h1>
    </div>
  );
};

export default LearnDetails;
