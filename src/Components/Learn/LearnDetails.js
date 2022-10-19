import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CodeEditor from "../../Shared/Editor/Editor";

const LearnDetails = (props) => {
  let { link_id } = useParams();

  const item = useSelector((state) => state.links[link_id]);

  console.table(item);

  return (
    <div>
      <div>
        <h1 className="text-white">{item.language}</h1>
      </div>
      <CodeEditor
        readOnly={true}
        scroll={false}
        language={item.language}
        content={item?.content}
      />
    </div>
  );
};

export default LearnDetails;
